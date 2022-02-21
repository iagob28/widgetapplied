import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

type UserMapType = {
  level: string | undefined;
  userAvatar: string | undefined;
  userName: string | undefined;
  xp: string | undefined;
};

export function ListUserElement({
  level,
  userAvatar,
  userName,
  xp,
}: UserMapType) {
  return (
    <li className="list_element">
      <img className="user_avatar" src={userAvatar} alt="" />
      <div className="user">
        <Title align="left">{userName}</Title>
        <Text size="small">Level {level}</Text>
      </div>
      <Text size="large">{xp} XP</Text>
    </li>
  );
}
