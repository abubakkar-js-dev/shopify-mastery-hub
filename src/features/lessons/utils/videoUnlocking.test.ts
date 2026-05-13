import { describe, expect, it } from "vitest";
import type { Lesson } from "../../../types";
import {
  getLessonNavigationState,
  getLessonVideoState,
  getStartingVideo,
  isLessonVideoUnlocked,
} from "./videoUnlocking";

const mockLesson: Lesson = {
  id: "lesson-1",
  moduleId: "module-1",
  title: "Test Lesson",
  description: "Test description",
  order: 1,
  difficulty: "Beginner",
  videos: [
    { id: "video-1", title: "Video 1", youtubeId: "yt1", duration: "5:00" },
    { id: "video-2", title: "Video 2", youtubeId: "yt2", duration: "10:00" },
    { id: "video-3", title: "Video 3", youtubeId: "yt3", duration: "15:00" },
  ],
  tasks: [],
};

describe("videoUnlocking", () => {
  describe("isLessonVideoUnlocked", () => {
    it("should return true for first video regardless of completed videos", () => {
      expect(isLessonVideoUnlocked(mockLesson, "video-1", [])).toBe(true);
      expect(isLessonVideoUnlocked(mockLesson, "video-1", ["video-2"])).toBe(
        true,
      );
    });

    it("should return false for second video if first is not completed", () => {
      expect(isLessonVideoUnlocked(mockLesson, "video-2", [])).toBe(false);
    });

    it("should return true for second video if first is completed", () => {
      expect(isLessonVideoUnlocked(mockLesson, "video-2", ["video-1"])).toBe(
        true,
      );
    });

    it("should return false for a non-existent video", () => {
      expect(isLessonVideoUnlocked(mockLesson, "video-999", [])).toBe(false);
    });
  });

  describe("getStartingVideo", () => {
    it("should return active video if it exists", () => {
      const result = getStartingVideo({
        lesson: mockLesson,
        activeVideoId: "video-2",
        completedVideos: [],
      });
      expect(result.id).toBe("video-2");
    });

    it("should return first unlocked and uncompleted video if no active video", () => {
      const result = getStartingVideo({
        lesson: mockLesson,
        activeVideoId: "",
        completedVideos: [],
      });
      expect(result.id).toBe("video-1");
    });

    it("should return next video after completed ones", () => {
      const result = getStartingVideo({
        lesson: mockLesson,
        activeVideoId: "",
        completedVideos: ["video-1"],
      });
      expect(result.id).toBe("video-2");
    });

    it("should return first video if all are completed", () => {
      const result = getStartingVideo({
        lesson: mockLesson,
        activeVideoId: "",
        completedVideos: ["video-1", "video-2", "video-3"],
      });
      expect(result.id).toBe("video-1");
    });
  });

  describe("getLessonVideoState", () => {
    it("should return correct video state", () => {
      const state = getLessonVideoState({
        lesson: mockLesson,
        activeVideoId: "video-2",
        completedVideos: ["video-1"],
      });

      expect(state.activeVideo.id).toBe("video-2");
      expect(state.currentVideoIndex).toBe(1);
      expect(state.hasNextVideo).toBe(true);
      expect(state.hasPrevVideo).toBe(true);
      expect(state.isVideoUnlocked("video-1")).toBe(true);
      expect(state.isVideoUnlocked("video-2")).toBe(true);
      expect(state.isVideoUnlocked("video-3")).toBe(false);
      expect(state.isVideoCompleted("video-1")).toBe(true);
      expect(state.isVideoCompleted("video-2")).toBe(false);
    });
  });

  describe("getLessonNavigationState", () => {
    const mockModuleLessons: Lesson[] = [
      { ...mockLesson, id: "lesson-1", order: 1 },
      { ...mockLesson, id: "lesson-2", order: 2 },
    ];

    it("should return correct navigation state", () => {
      const state = getLessonNavigationState({
        moduleLessons: mockModuleLessons,
        selectedLesson: mockModuleLessons[0],
        activeVideoId: "video-1",
        completedVideos: ["video-1"],
        completedLessons: [],
      });

      expect(state.currentLessonIndex).toBe(0);
      expect(state.prevLesson).toBeNull();
      expect(state.nextLesson?.id).toBe("lesson-2");
      expect(state.isNextVideoUnlocked).toBe(true);
    });
  });
});
