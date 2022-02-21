import { BiHomeAlt } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";
let isActive = true;

export function SideMenu() {
  const history = useNavigate();

  function handleHomeButton() {
    isActive = true;
    history("/Home");
  }

  function handleLeaderboardButton() {
    isActive = false;
    history("/Leaderboard");
  }

  return (
    <section className="side_menu">
      <button onClick={handleHomeButton} className={isActive ? "active" : ""}>
        <BiHomeAlt />
      </button>
      <button
        onClick={handleLeaderboardButton}
        className={isActive ? "" : "active"}
      >
        <FiAward />
      </button>
    </section>
  );
}
