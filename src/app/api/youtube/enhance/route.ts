import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });

type YouTubeVideoInput = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  position: number;
};

type YouTubePlaylistInput = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

const generateFallback = (p: YouTubePlaylistInput, v: YouTubeVideoInput[]) => ({
  module: {
    title: p.title,
    description: p.description || "Imported from YouTube playlist",
    month: 1,
    order: 1,
  },
  lessons: v.map((video, index) => ({
    title: video.title,
    description: video.description || "Watch this video to learn",
    difficulty:
      index < 3 ? "Beginner" : index < 6 ? "Intermediate" : "Advanced",
    tasks: [
      { id: `task-${index}-1`, title: "Watch the video" },
      { id: `task-${index}-2`, title: "Take notes on key concepts" },
    ],
  })),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      playlist,
      videos,
      skipAI = false,
    }: {
      playlist: YouTubePlaylistInput;
      videos: YouTubeVideoInput[];
      skipAI?: boolean;
    } = body;

    if (!playlist || !videos) {
      return NextResponse.json(
        { error: "Playlist and videos are required" },
        { status: 400 },
      );
    }

    if (skipAI) {
      return NextResponse.json(generateFallback(playlist, videos));
    }

    const systemInstruction = `
      You are a Shopify Curriculum Designer.
      
      TASK: Enhance a YouTube playlist into a structured course module with lessons.
      
      INPUT:
      - Playlist title and description
      - List of videos from the playlist
      
      OUTPUT FORMAT (valid JSON only):
      {
        "module": {
          "title": "Enhanced module title",
          "description": "Comprehensive module description",
          "month": 1,
          "order": 1
        },
        "lessons": [
          {
            "title": "Enhanced lesson title",
            "description": "Clear learning objectives for this lesson",
            "difficulty": "Beginner",
            "tasks": [
              {
                "id": "task-1",
                "title": "Practice task 1"
              }
            ]
          }
        ]
      }
      
      RULES:
      - One lesson per YouTube video
      - Lesson difficulty should be Beginner for first module, then Intermediate, then Advanced
      - Each lesson must have 2-3 tasks
      - Enhance titles and descriptions to be more educational
      - DO NOT include YouTube video IDs - we'll add those separately
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Playlist: ${JSON.stringify(playlist)}\nVideos: ${JSON.stringify(videos)}`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    if (!response.text) {
      throw new Error("Empty AI response");
    }

    return NextResponse.json(JSON.parse(response.text));
  } catch (error) {
    console.error("AI enhancement error:", error);

    try {
      const body = await request.json();
      const {
        playlist,
        videos,
      }: {
        playlist: YouTubePlaylistInput;
        videos: YouTubeVideoInput[];
      } = body;

      const fallback = generateFallback(playlist, videos);
      return NextResponse.json({
        ...fallback,
        aiFallback: true,
      });
    } catch {
      return NextResponse.json(
        { error: "Failed to process playlist" },
        { status: 500 },
      );
    }
  }
}
