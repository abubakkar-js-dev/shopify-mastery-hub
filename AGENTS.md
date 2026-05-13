# Shopify Mastery Hub Project Guide

This project is a Next.js App Router application for a Shopify learning hub. It uses React, TypeScript, Tailwind CSS, Firebase Auth/Firestore, Google GenAI, and Serwist/PWA support.

Use this file as the working guide for future contributors and AI agents. The main goal is better control as the app grows: keep business logic out of large UI files, keep Firebase access predictable, and group code by feature instead of by broad technical bucket only.

## Current Shape

Important files today:

- `src/app`: Next.js routes, layouts, API routes, PWA files, and global CSS.
- `src/components`: shared and page-level UI components.
- `src/features/admin/components/`: admin-only UI components (all split into panels now!).
- `src/features/lessons/components/`: lesson UI components (all split now!).
- `src/features/lessons/hooks/`: useLessonProgress already exists!
- `src/features/lessons/utils/`: videoUnlocking.ts already exists!
- `src/context/`: global state (AppContext.tsx, LearningDataContext.tsx, AdminContext.tsx).
- `src/features/modules/seed/`: initial module and lesson seed data (split by month).
- `src/lib`: shared utilities and Firebase setup.
- `src/services/geminiService.ts`: AI service integration.
- `src/types.ts`: app-wide types.

The largest scale risks right now are:

- `src/components/AdminDashboard.tsx` was split, but maybe need to check if fully migrated.
- `src/context/AppContext.tsx` still owns multiple domains (auth, profile, users).

## Recommended Structure

Move toward a feature-first structure while keeping `src/app` thin:

```txt
src/
  app/
    admin/page.tsx
    auth/page.tsx
    dashboard/page.tsx
    api/
  features/
    auth/
      components/
      hooks/
      services/
      types.ts
    dashboard/
      components/
      hooks/
    lessons/
      components/
      hooks/
      services/
      utils/
      types.ts
    modules/
      components/
      services/
      seed/
    admin/
      components/
      hooks/
      services/
      utils/
    ai/
      services/
      types.ts
  shared/
    components/
    hooks/
    lib/
    types/
    utils/
  context/
    AuthContext.tsx
    LearningDataContext.tsx
    AdminContext.tsx
```

This does not need to happen in one big rewrite. Apply it gradually whenever a file is touched for real work.

## Route-Based Architecture

**(Partially Implemented)**

This project should move away from major view switching controlled only by local component state. Major app sections should be represented by real routes so browser refresh, direct links, and back/forward navigation preserve the current view.

Primary goal:

- Refreshing the browser should keep the user on the same dashboard section, admin page, module, lesson, or sub-view.
- Local state should control small UI details, not the identity of the current page.
- URL routes should be the source of truth for major navigation.

Sections that should become dedicated route-based pages:

- user dashboard
- lesson view
- admin dashboard
- major user dashboard sub-pages
- major admin dashboard sub-pages
- any major section currently controlled by conditional rendering or tab state

**Already Implemented Routes**:

- `/dashboard/progress/`
- `/dashboard/modules/[moduleId]/`
- `/dashboard/modules/[moduleId]/lessons/[lessonId]/`
- `/admin/users/`
- `/admin/modules/`
- `/admin/lessons/`
- `/admin/settings/`
- `/admin/ai/`

Route refactor rules:

- Do not change existing business logic while moving code.
- Do not redesign existing UI during the route refactor.
- Do not remove features or simplify workflows as part of the move.
- Preserve auth flow, admin permissions, API behavior, and Firestore data flow.
- Keep existing component behavior intact unless a bug is directly caused by route persistence.
- Prefer moving existing sections into route pages before rewriting internals.
- Use nested routes for dashboard/admin sub-pages where it matches the existing hierarchy.
- Keep shared layout chrome in route layouts where appropriate.
- Replace tab/state-based major navigation with `Link` navigation and route params.
- Keep local component state only for temporary UI concerns such as open menus, collapsed panels, form drafts, filters, and modals.

## Refactor Priorities

1. Split `AdminDashboard.tsx`

Create smaller admin feature components, for example:

- `features/admin/components/AdminDashboardShell.tsx`
- `features/admin/components/UserManagementPanel.tsx`
- `features/admin/components/ModuleManagementPanel.tsx`
- `features/admin/components/LessonManagementPanel.tsx`
- `features/admin/hooks/useAdminUsers.ts`
- `features/admin/hooks/useAdminContent.ts`

Keep the dashboard shell responsible for layout and tab selection only. Move Firestore operations, filtering, forms, and derived stats into hooks or services.

**Progress**: AISynthesisLab, StatCard, TabButton already moved to `src/features/admin/components/`.

2. Split `LessonView.tsx`

Recommended parts:

- `features/lessons/components/LessonView.tsx`
- `features/lessons/components/LessonVideoPlayer.tsx`
- `features/lessons/components/LessonPlaylist.tsx`
- `features/lessons/components/LessonTaskList.tsx`
- `features/lessons/components/LessonNavigation.tsx`
- `features/lessons/hooks/useLessonProgress.ts`

The unlocking rules should live in a utility or hook, not directly inside JSX-heavy UI.

**Progress**: `src/features/lessons/utils/videoUnlocking.ts` already exists.

3. Split global context by responsibility

Avoid one context becoming the whole app store. Prefer:

- `AuthContext`: Firebase user, profile, loading, refresh profile.
- `LearningDataContext`: modules and lessons.
- `AdminContext`: admin status, users, admins, admin-only collections.

**Progress**: `LearningDataContext.tsx` already exists.

4. Move Firebase reads/writes into service files

Keep Firebase paths and Firestore calls centralized:

- `features/auth/services/profileService.ts`
- `features/modules/services/moduleService.ts`
- `features/lessons/services/lessonService.ts`
- `features/admin/services/adminService.ts`

Components and hooks should call these service functions instead of constructing Firestore paths directly.

**Progress**: `src/features/admin/services/adminService.ts` and `src/features/modules/services/moduleService.ts` already exist.

## Code Ownership Rules

- Route files in `src/app/**/page.tsx` should compose feature components. Avoid putting heavy logic there.
- Feature components may depend on `shared`, but `shared` should not depend on a feature.
- Firebase access belongs in service files, then hooks, then components.
- Shared UI goes in `shared/components` only when it is truly reused by multiple features.
- Keep generated or seed course content out of interactive components.
- Keep server-only code out of client components.

## TypeScript Practices

- Prefer feature-local `types.ts` files when a type is used by one feature.
- Keep truly global domain types in `shared/types` or `src/types.ts` during migration.
- Avoid `as` casts for Firestore data where possible. Add mapper functions such as `toUserProfile`, `toModule`, and `toLesson`.
- Use explicit return types for service functions and complex hooks.
- Keep component prop types named when props are non-trivial:

```ts
type LessonViewProps = {
  lesson: Lesson;
  module: Module;
  onBack: () => void;
};
```

## React Practices

- Keep components focused on rendering.
- Move derived state and workflow logic into hooks.
- Memoize only when there is a measured or obvious render cost.
- Remove debug logging before shipping, such as `console.log("Active Video:", activeVideo)`.
- Avoid prop chains that pass many unrelated values. Introduce a hook or narrower child component boundary.
- Keep UI state local unless another route or feature genuinely needs it.

## Firebase Practices

- Centralize collection names and paths in one file, for example `shared/lib/firestorePaths.ts`.
- Always unsubscribe from Firestore listeners in effects.
- Keep admin permission checks in one service/helper, not scattered across UI files.
- Do not hard-code permanent admin emails in component logic. Move emergency allowlists to config or environment-driven helpers.
- Handle Firestore errors through shared helpers such as `handleFirestoreError`.
- Prefer small, named functions over inline Firestore operations inside components.

## AI Service Practices

- Keep GenAI calls behind `features/ai/services`.
- Validate inputs before sending them to the AI service.
- Keep prompt templates in named functions or constants.
- Never expose server-only API keys to client components.
- Prefer API routes for privileged AI calls.

## Styling Practices

- Continue using Tailwind utilities and the existing `cn` helper.
- Keep design tokens in `globals.css` or Tailwind theme configuration.
- Extract repeated UI patterns into small components only after they repeat.
- Keep admin interfaces dense and operational. Avoid marketing-style layouts for dashboards.
- Buttons should have clear disabled, loading, hover, and focus states.

## User Experience Practices

Design the app around two main user journeys: students learning Shopify step by step, and admins managing content/users efficiently.

Student experience:

- Keep the next action obvious on every screen: continue lesson, watch next video, complete task, or return to module.
- Preserve learning context when navigating between dashboard, module overview, and lesson view.
- Show progress consistently with completed lessons, completed videos, completed tasks, and module progress.
- Make locked content understandable. Explain what must be completed to unlock the next lesson or video.
- Avoid surprising jumps in the lesson player, playlist, or task list when progress changes.
- Keep the AI co-pilot helpful but secondary. It should support the lesson, not distract from the lesson flow.
- Use empty states that tell users what happened and what they can do next.

Admin experience:

- Optimize admin screens for repeated work: scanning, filtering, editing, saving, and recovering from mistakes.
- Keep destructive actions explicit and confirm high-risk changes.
- Show save, loading, success, and error states near the action that caused them.
- Keep forms grouped by task, not by database shape.
- Avoid hiding important management actions behind vague icons without labels or tooltips.
- Make AI-generated content reviewable before it becomes course content.

Accessibility and usability:

- Use semantic HTML before custom interaction patterns.
- Every interactive control needs a visible label, accessible name, or clear tooltip.
- Keyboard navigation should work for primary flows, dialogs, forms, tabs, and lesson controls.
- Maintain readable contrast for text, borders, disabled states, and progress indicators.
- Do not rely on color alone to communicate status.
- Use focus styles that are visible on dark backgrounds.
- Keep touch targets comfortable on mobile.

Responsive behavior:

- Build mobile-first layouts for student screens.
- Keep admin dashboards usable on laptops first, then adapt for smaller screens.
- Avoid horizontal scrolling except for intentional data tables.
- Make video, playlist, task list, and navigation controls stable across screen sizes.
- Check long lesson titles, module names, emails, and generated AI text for wrapping.

Performance and perceived speed:

- Show skeletons or lightweight loading states for auth, profile, modules, lessons, and admin data.
- Avoid blocking the whole app when only one panel is loading.
- Keep Firestore listeners scoped to the current screen or role when possible.
- Lazy-load heavy admin or AI sections when they are not needed immediately.
- Do not fetch admin-only data for non-admin users.

Error and recovery:

- Error messages should explain the user-facing problem and the next step.
- Keep technical details in logs or developer-only paths.
- If Firestore data is missing, fall back safely to seed content where appropriate.
- If an AI request fails, keep the current draft/input intact so the user can retry.
- Never clear user-entered form data after a failed save.

## Testing And Quality

Add tests when refactoring logic out of components. Priority targets:

- video unlocking rules
- lesson completion rules
- module/lesson sorting
- Firestore mapper functions
- admin permission helpers
- AI prompt builders

Before finishing code changes, run:

```sh
npm run lint
npm run build
```

If tests are added later, also run the relevant test command.

## Migration Plan

Do this gradually:

1. ~~Create `features` and `shared` folders.~~ **(COMPLETED)**
2. Move admin dashboard subcomponents first because `AdminDashboard.tsx` is the largest file.
3. Extract lesson progress and video unlocking logic from `LessonView.tsx`.
   - ~~videoUnlocking.ts~~ **(COMPLETED)**
4. Move Firestore calls from contexts/components into services.
5. Split `AppContext` into auth, learning data, and admin contexts.
   - ~~LearningDataContext.tsx~~ **(PARTIALLY COMPLETED)**
6. ~~Split seed course data by module.~~ **(COMPLETED)**
7. Add tests around extracted logic before changing behavior.

Avoid large refactors that move everything at once. Small, behavior-preserving moves are safer and easier to review.

## Naming Conventions

- Components: `PascalCase.tsx`
- Hooks: `useThing.ts`
- Services: `thingService.ts`
- Utilities: `thingUtils.ts` or a descriptive domain name such as `videoUnlocking.ts`
- Seed data: `*.seed.ts`
- Types: feature-local `types.ts`, shared domain types in `shared/types`

## Definition Of Done

A change is complete when:

- The touched feature still builds and lints.
- Business logic is not hidden inside large JSX blocks.
- Firestore paths and privileged operations remain centralized.
- Components have clear ownership and readable props.
- New structure follows the feature-first direction above.
- No unrelated user changes are reverted.
