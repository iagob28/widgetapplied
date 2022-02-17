import "./index.css";
import { XperienceBar } from "../../components/XperienceBar/XperienceBar";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { useTimer } from "../../hooks/useTimer";

export function Home() {
  const { card } = useTimer();
  return (
    <>
      <div className="box_center">
        <XperienceBar />
        <main>
          <UserInfo />
          {card}
        </main>
      </div>

      <SideMenu />
    </>
  );
}
