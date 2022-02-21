import { useUsers } from "../../hooks/useUsers";
import { ListUserElement } from "../ListUserElement";
import { Title } from "../Title/Title";
import "./index.css";

export function LeaderboardList() {
  const { users } = useUsers();
  
  if (users !== undefined) {
    users.sort(function compare(xpa, xpb) {
      if (parseInt(xpa.xp) > parseInt(xpb.xp)) return -1;
      if (parseInt(xpa.xp) < parseInt(xpb.xp)) return 1;
      return 0;
    });
  }

  return (
    <>
      <div className="background">
        <Title size="large">Leaderboard</Title>
        <ul>
          {users?.map((user) => {
            return (
              <ListUserElement
                key={user.id}
                level={user.level}
                userAvatar={user.userAvatar}
                userName={user.userName}
                xp={user.xp}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
