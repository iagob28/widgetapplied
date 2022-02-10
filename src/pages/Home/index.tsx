import { Button } from "../../components/Button";
import "./index.css";
import { GoArrowUp } from "react-icons/go";
import { GiUpgrade } from "react-icons/gi";
import {
  AiFillCaretRight,
  AiOutlineClose,
  AiFillCheckCircle,
} from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

const COUNTDOWN_AMOUNT_TOTAL = 25 * 60; // 25 minutes for timer
let timeout: NodeJS.Timeout;

export function Home() {
  const [seconds, setSeconds] = useState<number>(COUNTDOWN_AMOUNT_TOTAL);
  const [isActive, setIsActive] = useState(false);
  const [userXp, setUserXp] = useState(0);

  useEffect(() => {
    if (isActive && seconds > 0) {
      timeout = setTimeout(() => {
        setSeconds((state) => state - 1);
      }, 1000);
    } else {
      clearTimeout(timeout);
    }
  }, [seconds, isActive]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const displayUserXp = (userXp / 600) * 100;

  return (
    <>
      <header>
        0xp
        <div
          style={{
            background: `linear-gradient(to right, #4CD62B, #4CD62B ${displayUserXp}%, #b6b6b6 1%)`,
          }}
        ></div>
        600xp
      </header>
      <main>
        <section className="info_user">
          <div className="user_data">
            <img
              className="user_avatar"
              src="https://www.oficinadeinverno.com.br/blog/wp-content/uploads/2019/01/oficina-de-inverno-aplicativos-de-edicao-de-fotos-por-do-sol.jpg"
              alt=""
            />
            <div>
              <h1>Nome sobrenome</h1>
              <img src="" alt="" />
              <p>
                <GoArrowUp color="#4CD62B" /> Level 1
              </p>
            </div>
          </div>
          <div>
            <span>
              <p>Desafios completos</p>
              <p>00</p>
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
        <section className="info_challenge">
          <h3>Inicie um ciclo para receber desafios</h3>
          <span>
            <GiUpgrade color="#4CD62B" />
          </span>
          <p>Avance de level completando os desafios</p>
        </section>
      </main>
      <section className="side_menu">
        <span className="active">
          <BiHomeAlt />
        </span>
        <span>
          <FiAward />
        </span>
      </section>
    </>
  );
}
