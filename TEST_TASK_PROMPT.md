# Add Tests for Module & Lesson Logic

## Task Description

Add utility functions and corresponding tests for module/lesson sorting and progress calculation, as mentioned in the **Testing And Quality** section of AGENTS.md.

## Goals

1. Create utility functions for:
   - Sorting modules and lessons by their `order` field
   - Calculating module completion percentage
   - Calculating lesson video and task progress
2. Write comprehensive tests for all utility functions
3. Ensure all existing tests still pass
4. Follow the project's coding conventions and structure

## Files to Create

1. `src/features/modules/utils/moduleUtils.ts`: Utility functions
2. `src/features/modules/utils/moduleUtils.test.ts`: Test file

## Implementation Steps

### 1. Create Utility Functions

Create `src/features/modules/utils/moduleUtils.ts` with these functions:

- `sortModules(modules: Module[]): Module[]`: Returns modules sorted by `order`
- `sortLessons(lessons: Lesson[]): Lesson[]`: Returns lessons sorted by `order`
- `calculateModuleProgress(moduleLessons: Lesson[], completedLessons: string[]): number`: Returns percentage (0-100) of lessons completed in a module
- `calculateLessonProgress(lesson: Lesson, completedVideos: string[], completedTasks: string[]): { videosProgress: number; tasksProgress: number }`: Returns progress percentages for videos and tasks

### 2. Write Test File

Create `src/features/modules/utils/moduleUtils.test.ts` with:

- Tests for `sortModules`:
  - Sorting modules in ascending order
  - Handling empty arrays
  - Not mutating the original array
- Tests for `sortLessons`:
  - Sorting lessons in ascending order
  - Handling empty arrays
  - Not mutating the original array
- Tests for `calculateModuleProgress`:
  - 0% progress for empty lessons
  - 0% when no lessons completed
  - 100% when all lessons completed
  - Correct percentage for partial completion
- Tests for `calculateLessonProgress`:
  - 100% when videos or tasks are empty
  - Correct percentages for partial completion

### 3. Verify Changes

Run these commands to ensure everything works:

```sh
npm run lint
npm run build
npm test
```

## Rules to Follow

- Use TypeScript types from `src/types.ts`
- Follow the existing coding style in the project
- Don't change any business logic outside the utility functions
- Keep functions pure (no side effects)
- Return new arrays instead of mutating inputs
- Use Vitest for testing (already configured)
