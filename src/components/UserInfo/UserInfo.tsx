import {
  AiFillCaretRight,
  AiFillCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { GoArrowUp } from "react-icons/go";
import { useAuth } from "../../hooks/useAuth";
import { useTimer } from "../../hooks/useTimer";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import "../UserInfo/UserInfo.css";

export function UserInfo() {
  const { seconds, isActive, changeSeconds, changeIsActive } = useTimer();
  const { user } = useAuth();

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <section className="info_user">
      <div className="user_data">
        <img className="user_avatar" src={user.photoURL} alt="" />
        <div>
          <Title weight="heavy" align="left">
            {user.displayName}
          </Title>
          <img src="" alt="" />
          <Text size="small">
            Level {user.level} <GoArrowUp color="#4CD62B" />
          </Text>
        </div>
      </div>
      <div>
        <span>
          <Text>Desafios completos</Text>
          <Text>{user.completeChallenges}</Text>
        </span>
        <div className="divider"></div>
      </div>

      <div className="timer">
        <h2 className="flex items-center">{String(displayMinutes).padStart(2, "0")}</h2>
        <p className="flex items-center">:</p>
        <h2 className="flex items-center">{String(displaySeconds).padStart(2, "0")}</h2>
      </div>
      {/* Start button */}
      <Button
        display={isActive ? "none" : "show"}
        onClick={() => changeIsActive()}
      >
        Iniciar um ciclo <AiFillCaretRight />
      </Button>
      {/* Cancel Button */}
      <Button
        color="white"
        display={seconds === 0 ? "none" : isActive ? "show" : "none"}
        onClick={() => {
          changeIsActive();
          changeSeconds(25 * 60);
        }}
      >
        Abandonar ciclo <AiOutlineClose />
      </Button>
      {/* Finish button */}
      <Button
        color="white"
        borderStyle="complete"
        display={seconds === 0 ? "show" : "none"}
      >
        Ciclo concluído <AiFillCheckCircle color="#4CD62B" />
      </Button>
    </section>
  );
}
