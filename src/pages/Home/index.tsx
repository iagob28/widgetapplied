import { Button } from "../../components/Button";
import "./index.css";
import { GoArrowUp } from "react-icons/go";
import { GiUpgrade } from "react-icons/gi";
import { AiFillCaretRight } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { useState } from "react";

export function Home() {
  const [segundos, setSegundos] = useState<string>("00");
  const [minutos, setMinutos] = useState<string>("25");
  var i = 0;
  var j = 25;

  function startTimer() {
    const timer = setInterval(timeCounter, 1000);
    setTimeout(() => {
      clearInterval(timer);
    }, 250000);
  }

  function timeCounter() {
    if (i === 0) {
      setSegundos("59");
      j--;
      i = 59;
      if (j < 10) {
        setMinutos("0" + j);
      } else setMinutos(`${j}`);
    } else if (i > 0) {
      i--;
      if (i < 10) {
        setSegundos("0" + i);
      } else setSegundos(`${i}`);
    }
  }

  return (
    <>
      <header>
        0xp
        <div></div>
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
            <h2>{minutos}</h2>
            <p>:</p>
            <h2>{segundos}</h2>
          </div>

          <Button onClick={startTimer}>
            Iniciar um ciclo <AiFillCaretRight />
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
