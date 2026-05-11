# Agent.md – AI Coding Agent Instructions

## Context

You are working on the **Admin Dashboard > Content > Generate Modules/Roadmap Using AI** feature.

## Critical Problems to Fix

1. There are **24 API errors** that need to be fixed
2. **Preview mode is not working properly** and must be perfectly implemented
3. **No centralized success/error message handling** – all success and error messages must be handled using a library or custom-made component

## Objectives

### 1. Fix All 24 API Errors

- Identify and fix every single API error
- Ensure all API endpoints work correctly with proper HTTP status codes
- Handle all edge cases: null values, missing fields, network failures, timeouts
- Add proper error logging on backend
- Return structured error responses with clear messages
- Validate all inputs before processing
- Add try-catch blocks to all async API handlers
- Test all endpoints thoroughly

### 2. Perfect Preview Implementation

The preview must be 100% flawless with zero errors:

- Handle null/undefined data safely (optional chaining, default values)
- Display all roadmap/module fields correctly (title, description, objectives, technologies, resources, projects, recommendations)
- Make it fully responsive (mobile, tablet, desktop)
- Implement proper loading state with spinner/skeleton
- Implement proper error state with clear message and retry button
- Implement empty state if no data generated
- Ensure smooth scroll behavior with sticky footer for confirm/cancel buttons
- Make it accessible (keyboard navigation, ARIA labels, screen reader friendly)
- Zero console errors

### 3. Centralized Success/Error Message Handling

- Implement uniform message handling for ALL success and error cases
- Use a toast/notification library (react-hot-toast, notistack, or similar) OR create a custom message/snackbar component
- Show messages for EVERY user action:
  - AI generation starts (loading)
  - AI generation succeeds (success)
  - AI generation fails (error)
  - Preview renders (info)
  - Confirm clicked/saving (loading)
  - Save succeeds (success)
  - Save fails (error)
  - Cancel clicked (info)
  - API timeout (error)
  - Network error (error)
  - Validation error (error)
  - Authentication/permission error (error)
- Messages must be clear, user-friendly, and actionable
- Auto-dismiss after 4 seconds (except errors can stay longer)
- Position messages consistently (top-right recommended)
- Use appropriate colors and icons for each message type (success=green/check, error=red/X, loading=blue/spinner)

## Desired User Flow

1. User clicks "Generate Roadmap Using AI"
2. Show loading message: "Generating roadmap with AI..."
3. AI generates data and returns JSON
4. If successful: show success message + display preview
5. If failed: show error message + retry option
6. User reviews preview (can edit if needed)
7. User clicks ✅ Confirm:
   - Show loading: "Saving roadmap..."
   - Save to database
   - Show success: "Roadmap saved successfully!"
   - Or show error if save fails
8. User clicks ❌ Cancel:
   - Show info: "Roadmap discarded. No changes were made."
   - Close preview
   - No database operation

## Success Criteria

- ✅ All 24 API errors fixed (test and verify each one)
- ✅ Preview works perfectly with zero console errors
- ✅ All data renders correctly in preview
- ✅ Loading, error, empty, and success states all work
- ✅ ALL success and error messages handled with toast/component
- ✅ No unhandled errors anywhere
- ✅ Responsive and accessible UI
- ✅ Code is maintainable and well-commented

## Testing Checklist

Before marking complete, verify:

- [ ] All 24 API errors are fixed
- [ ] Preview shows zero console errors on desktop
- [ ] Preview shows zero console errors on mobile
- [ ] All module fields display correctly
- [ ] Confirm button saves data successfully
- [ ] Cancel button discards data without saving
- [ ] Loading message shows during AI generation
- [ ] Success message shows after generation
- [ ] Error message shows if AI fails
- [ ] Loading message shows during save
- [ ] Success message shows after save
- [ ] Error message shows if save fails
- [ ] Info message shows on cancel
- [ ] All toasts/messages are visible and clear
- [ ] No network errors in console
- [ ] No unhandled promise rejections
