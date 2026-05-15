import toast from "react-hot-toast";
import { useAdmin } from "../../../context/AdminContext";
import { useLearningData } from "../../../context/LearningDataContext";
import { adminService } from "../services/adminService";

export function useAdminUsers() {
  const { users, admins } = useAdmin();
  const { lessons } = useLearningData();

  const toggleAdmin = async (uid: string, currentIsAdmin: boolean) => {
    try {
      const user = users.find((u) => u.uid === uid);
      await adminService.toggleAdmin(
        uid,
        !currentIsAdmin,
        user?.email || undefined,
      );
      toast.success(currentIsAdmin ? "Admin revoked!" : "Admin granted!");
    } catch (error) {
      console.error("toggleAdmin error:", error);
      toast.error(
        "Failed to update admin status. Check Firestore permissions.",
      );
    }
  };

  const deleteUser = async (uid: string) => {
    try {
      const result = await adminService.deleteUser(uid);
      if (result) {
        toast.success("User deleted!");
      }
      return result;
    } catch (error) {
      console.error("deleteUser error:", error);
      toast.error("Failed to delete user. Check Firestore permissions.");
      return false;
    }
  };

  return {
    users,
    admins,
    lessons,
    toggleAdmin,
    deleteUser,
  };
}
