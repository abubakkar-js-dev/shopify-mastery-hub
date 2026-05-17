export interface Task {
  id: string;
  title: string;
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  month: number;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  embedUrl?: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  videos: Video[];
  description: string;
  order: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tasks: Task[];
  resources?: { id: string; title: string; url: string; type: string }[];
}

export interface AdminRecord {
  uid: string;
  email: string;
  addedAt: string;
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  completedLessons: string[];
  completedVideos: string[];
  completedTasks: string[]; 
  personalizedPath?: {
    goals: string[];
    recommendedModules: string[];
    lastUpdated: string;
  };
  lastActive: string;
}
