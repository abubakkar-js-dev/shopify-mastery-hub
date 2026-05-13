import { describe, it, expect } from "vitest";
import {
  sortModules,
  sortLessons,
  calculateModuleProgress,
  calculateLessonProgress,
} from "./moduleUtils";
import type { Module, Lesson } from "../../../types";

describe("moduleUtils", () => {
  describe("sortModules", () => {
    it("should sort modules by order in ascending order", () => {
      const modules: Module[] = [
        { id: "m2", title: "Module 2", description: "", order: 2, month: 1 },
        { id: "m1", title: "Module 1", description: "", order: 1, month: 1 },
        { id: "m3", title: "Module 3", description: "", order: 3, month: 1 },
      ];
      const sorted = sortModules(modules);
      expect(sorted[0].id).toBe("m1");
      expect(sorted[1].id).toBe("m2");
      expect(sorted[2].id).toBe("m3");
    });

    it("should handle empty array", () => {
      expect(sortModules([])).toEqual([]);
    });

    it("should not mutate the original array", () => {
      const modules: Module[] = [
        { id: "m2", title: "Module 2", description: "", order: 2, month: 1 },
        { id: "m1", title: "Module 1", description: "", order: 1, month: 1 },
      ];
      const original = [...modules];
      sortModules(modules);
      expect(modules).toEqual(original);
    });
  });

  describe("sortLessons", () => {
    it("should sort lessons by order in ascending order", () => {
      const lessons: Lesson[] = [
        {
          id: "l2",
          moduleId: "m1",
          title: "Lesson 2",
          videos: [],
          description: "",
          order: 2,
          difficulty: "Beginner",
          tasks: [],
        },
        {
          id: "l1",
          moduleId: "m1",
          title: "Lesson 1",
          videos: [],
          description: "",
          order: 1,
          difficulty: "Beginner",
          tasks: [],
        },
      ];
      const sorted = sortLessons(lessons);
      expect(sorted[0].id).toBe("l1");
      expect(sorted[1].id).toBe("l2");
    });

    it("should handle empty array", () => {
      expect(sortLessons([])).toEqual([]);
    });

    it("should not mutate the original array", () => {
      const lessons: Lesson[] = [
        {
          id: "l2",
          moduleId: "m1",
          title: "Lesson 2",
          videos: [],
          description: "",
          order: 2,
          difficulty: "Beginner",
          tasks: [],
        },
        {
          id: "l1",
          moduleId: "m1",
          title: "Lesson 1",
          videos: [],
          description: "",
          order: 1,
          difficulty: "Beginner",
          tasks: [],
        },
      ];
      const original = [...lessons];
      sortLessons(lessons);
      expect(lessons).toEqual(original);
    });
  });

  describe("calculateModuleProgress", () => {
    it("should calculate 0% progress for empty lessons", () => {
      expect(calculateModuleProgress([], ["l1"])).toBe(0);
    });

    it("should calculate 0% progress when no lessons are completed", () => {
      const lessons: Lesson[] = [
        {
          id: "l1",
          moduleId: "m1",
          title: "Lesson 1",
          videos: [],
          description: "",
          order: 1,
          difficulty: "Beginner",
          tasks: [],
        },
        {
          id: "l2",
          moduleId: "m1",
          title: "Lesson 2",
          videos: [],
          description: "",
          order: 2,
          difficulty: "Beginner",
          tasks: [],
        },
      ];
      expect(calculateModuleProgress(lessons, [])).toBe(0);
    });

    it("should calculate 100% progress when all lessons are completed", () => {
      const lessons: Lesson[] = [
        {
          id: "l1",
          moduleId: "m1",
          title: "Lesson 1",
          videos: [],
          description: "",
          order: 1,
          difficulty: "Beginner",
          tasks: [],
        },
      ];
      expect(calculateModuleProgress(lessons, ["l1"])).toBe(100);
    });

    it("should calculate 50% progress when half the lessons are completed", () => {
      const lessons: Lesson[] = [
        {
          id: "l1",
          moduleId: "m1",
          title: "Lesson 1",
          videos: [],
          description: "",
          order: 1,
          difficulty: "Beginner",
          tasks: [],
        },
        {
          id: "l2",
          moduleId: "m1",
          title: "Lesson 2",
          videos: [],
          description: "",
          order: 2,
          difficulty: "Beginner",
          tasks: [],
        },
      ];
      expect(calculateModuleProgress(lessons, ["l1"])).toBe(50);
    });
  });

  describe("calculateLessonProgress", () => {
    it("should return 100% for videos and tasks when empty", () => {
      const lesson: Lesson = {
        id: "l1",
        moduleId: "m1",
        title: "Lesson 1",
        videos: [],
        description: "",
        order: 1,
        difficulty: "Beginner",
        tasks: [],
      };
      expect(calculateLessonProgress(lesson, [], [])).toEqual({
        videosProgress: 100,
        tasksProgress: 100,
      });
    });

    it("should calculate correct video and task progress", () => {
      const lesson: Lesson = {
        id: "l1",
        moduleId: "m1",
        title: "Lesson 1",
        videos: [
          { id: "v1", title: "Video 1", youtubeId: "v1", duration: "5:00" },
          { id: "v2", title: "Video 2", youtubeId: "v2", duration: "5:00" },
        ],
        description: "",
        order: 1,
        difficulty: "Beginner",
        tasks: [
          { id: "t1", title: "Task 1" },
          { id: "t2", title: "Task 2" },
          { id: "t3", title: "Task 3" },
        ],
      };
      expect(calculateLessonProgress(lesson, ["v1"], ["t1", "t2"])).toEqual({
        videosProgress: 50,
        tasksProgress: 67,
      });
    });
  });
});
