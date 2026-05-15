import { NextResponse } from "next/server";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

type YouTubePlaylistItem = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails?: {
      high?: { url: string };
      default?: { url: string };
    };
  };
};

type YouTubePlaylistVideoItem = {
  snippet: {
    resourceId: {
      kind: string;
      videoId: string;
    };
    title: string;
    description: string;
    thumbnails?: {
      high?: { url: string };
      default?: { url: string };
    };
    position: number;
  };
};

export async function POST(request: Request) {
  try {
    const { playlistUrl } = await request.json();

    if (!YOUTUBE_API_KEY) {
      return NextResponse.json(
        { error: "YouTube API key not configured" },
        { status: 500 },
      );
    }

    if (!playlistUrl) {
      return NextResponse.json(
        { error: "Playlist URL is required" },
        { status: 400 },
      );
    }

    const playlistId = extractPlaylistId(playlistUrl);
    if (!playlistId) {
      return NextResponse.json(
        { error: "Invalid YouTube playlist URL" },
        { status: 400 },
      );
    }

    const playlistData = await fetchPlaylistDetails(
      playlistId,
      YOUTUBE_API_KEY,
    );
    const playlistVideos = await fetchPlaylistVideos(
      playlistId,
      YOUTUBE_API_KEY,
    );

    return NextResponse.json({
      playlist: playlistData,
      videos: playlistVideos,
    });
  } catch (error) {
    console.error("YouTube API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch playlist data" },
      { status: 500 },
    );
  }
}

function extractPlaylistId(url: string): string | null {
  const patterns = [
    /[?&]list=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/playlist\?list=([a-zA-Z0-9_-]+)/,
    /youtu\.be\/playlist\?list=([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

async function fetchPlaylistDetails(playlistId: string, apiKey: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch playlist: ${response.status}`);
  }

  const data = await response.json();
  if (!data.items || data.items.length === 0) {
    throw new Error("Playlist not found");
  }

  const playlist: YouTubePlaylistItem = data.items[0];
  return {
    id: playlist.id,
    title: playlist.snippet.title,
    description: playlist.snippet.description,
    thumbnail:
      playlist.snippet.thumbnails?.high?.url ||
      playlist.snippet.thumbnails?.default?.url,
  };
}

async function fetchPlaylistVideos(playlistId: string, apiKey: string) {
  let videos: Array<{
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    position: number;
  }> = [];
  let nextPageToken = "";

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);
    if (nextPageToken) {
      url.searchParams.set("pageToken", nextPageToken);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch playlist videos: ${response.status}`);
    }

    const data = await response.json();
    videos = [
      ...videos,
      ...(data.items || [])
        .filter(
          (item: YouTubePlaylistVideoItem) =>
            item.snippet.resourceId.kind === "youtube#video",
        )
        .map((item: YouTubePlaylistVideoItem) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail:
            item.snippet.thumbnails?.high?.url ||
            item.snippet.thumbnails?.default?.url,
          position: item.snippet.position,
        })),
    ];

    nextPageToken = data.nextPageToken || "";
  } while (nextPageToken);

  return videos.sort((a, b) => a.position - b.position);
}
