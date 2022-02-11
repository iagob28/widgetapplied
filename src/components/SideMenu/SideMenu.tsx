import { BiHomeAlt } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import "./SideMenu.css"

export function SideMenu() {
  return (
    <section className="side_menu">
      <span className="active">
        <BiHomeAlt />
      </span>
      <span>
        <FiAward />
      </span>
    </section>
  );
}
