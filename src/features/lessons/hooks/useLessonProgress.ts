import { useAppContext } from "../../../context/AppContext";
import { lessonService } from "../services/lessonService";

export function useLessonProgress() {
  const { user, profile } = useAppContext();

  const toggleLesson = async (lessonId: string) => {
    if (!user || !profile) return;
    await lessonService.toggleLessonCompletion(user.uid, profile, lessonId);
  };

  const toggleVideo = async (videoId: string) => {
    if (!user || !profile) return;
    await lessonService.toggleVideoCompletion(user.uid, profile, videoId);
  };

  const toggleTask = async (taskId: string) => {
    if (!user || !profile) return;
    await lessonService.toggleTaskCompletion(user.uid, profile, taskId);
  };

  return {
    toggleLesson,
    toggleVideo,
    toggleTask,
    completedLessons: profile?.completedLessons || [],
    completedVideos: profile?.completedVideos || [],
    completedTasks: profile?.completedTasks || [],
  };
}
