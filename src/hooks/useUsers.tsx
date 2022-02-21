import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type Users = {
  id: string;
  completeChallenges?: string;
  level?: string;
  userAvatar?: string;
  userName?: string;
  xp: string;
};
export function useUsers() {
  const [users, setUsers] = useState<Users[] | void>();

  useEffect(() => {
    const data = collection(database, "users");
    async function getUsers() {
      const q = query(data, where("userName", "!=", ""));
      const querySnapshot = await getDocs(q);

      const parsedUsers = Object.entries(querySnapshot.docs).map(
        ([, value]) => {
          return {
            id: value.id,
            completeChallenges: value.data().completeChallenges,
            level: value.data().level,
            userAvatar: value.data().userAvatar,
            userName: value.data().userName,
            xp: value.data().xp,
          };
        }
      );

      setUsers(parsedUsers);
    }
    getUsers();
  }, []);

  return { users };
}
