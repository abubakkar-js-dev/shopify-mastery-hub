import { useAppContext } from "../../../context/AppContext";
import { adminService } from "../services/adminService";

export function useAdminUsers() {
  const { users, admins, lessons } = useAppContext();
  
  const toggleAdmin = async (uid: string, currentIsAdmin: boolean) => {
    await adminService.toggleAdmin(uid, !currentIsAdmin);
  };

  const deleteUser = async (uid: string) => {
    return await adminService.deleteUser(uid);
  };

  return {
    users,
    admins,
    lessons,
    toggleAdmin,
    deleteUser,
  };
}
