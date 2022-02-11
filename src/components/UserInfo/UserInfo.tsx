import { useEffect } from "react";
import {
  AiFillCaretRight,
  AiFillCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { GoArrowUp } from "react-icons/go";
import { useTimer } from "../../hooks/useTimer";
import { Button } from "../Button/Button";
import { Challenges } from "../Challenges/Challenges";
import { NoChallengeInfo } from "../NoChallenges/NoChallengeInfo";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import "../UserInfo/UserInfo.css";

let timeout: NodeJS.Timeout;

export function UserInfo() {
  const { seconds, isActive, setCard, setSeconds, setIsActive } = useTimer();

  useEffect(() => {
    setCard(<NoChallengeInfo />);
    if (isActive && seconds > 0) {
      timeout = setTimeout(() => {
        setSeconds((state) => state - 1);
      }, 1000);
    } else {
      clearTimeout(timeout);
      if (seconds === 0) {
        setCard(<Challenges />);
      }
    }
  }, [seconds, isActive]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <section className="info_user">
      <div className="user_data">
        <img
          className="user_avatar"
          src="https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2019/01/oficina-de-inverno-aplicativos-de-edicao-de-fotos-por-do-sol.jpg"
          alt=""
        />
        <div>
          <Title weight="heavy" align="left">
            Nome sobrenome
          </Title>
          <img src="" alt="" />
          <Text size="small">
            Level 1 <GoArrowUp color="#4CD62B" />
          </Text>
        </div>
      </div>
      <div>
        <span>
          <Text>Desafios completos</Text>
          <Text>00</Text>
        </span>
        <div className="divider"></div>
      </div>

      <div className="timer">
        <h2>{String(displayMinutes).padStart(2, "0")}</h2>
        <p>:</p>
        <h2>{String(displaySeconds).padStart(2, "0")}</h2>
      </div>
      {/* Start button */}
      <Button
        display={isActive ? "none" : "show"}
        onClick={() => setIsActive(!isActive)}
      >
        Iniciar um ciclo <AiFillCaretRight />
      </Button>
      {/* Cancel Button */}
      <Button
        color="white"
        display={seconds === 0 ? "none" : isActive ? "show" : "none"}
        onClick={() => {
          setIsActive(!isActive);
          setSeconds(25 * 60);
        }}
      >
        Abandonar ciclo <AiOutlineClose />
      </Button>
      {/* Finish button */}
      <Button
        color="white"
        borderStyle="complete"
        display={seconds === 0 ? "show" : "none"}
        onClick={() => {
          setIsActive(!isActive);
          setSeconds(25 * 60);
        }}
      >
        Ciclo concluído <AiFillCheckCircle color="#4CD62B" />
      </Button>
    </section>
  );
}
