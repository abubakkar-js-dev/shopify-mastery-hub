export const COLLECTIONS = {
  USERS: "users",
  ADMINS: "admins",
  MODULES: "modules",
} as const;

export const firestorePaths = {
  users: () => COLLECTIONS.USERS,
  user: (uid: string) => `${COLLECTIONS.USERS}/${uid}`,
  admins: () => COLLECTIONS.ADMINS,
  admin: (uid: string) => `${COLLECTIONS.ADMINS}/${uid}`,
  modules: () => COLLECTIONS.MODULES,
  module: (moduleId: string) => `${COLLECTIONS.MODULES}/${moduleId}`,
  lessons: (moduleId: string) => `${COLLECTIONS.MODULES}/${moduleId}/lessons`,
  lesson: (moduleId: string, lessonId: string) =>
    `${COLLECTIONS.MODULES}/${moduleId}/lessons/${lessonId}`,
};
