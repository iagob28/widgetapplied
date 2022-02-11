import { createContext, ReactNode, useState } from "react";
import { NoChallengeInfo } from "../components/NoChallenges/NoChallengeInfo";

type TimerContextType = {
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  card: JSX.Element;
  setCard: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

type propsType = {
  children?: JSX.Element;
};

export const TimerContext = createContext({} as TimerContextType);
const COUNTDOWN_AMOUNT_TOTAL = 60 * 25; // 25 minutes for timer

export function TimerContextProvider(props: propsType) {
  const [seconds, setSeconds] = useState<number>(COUNTDOWN_AMOUNT_TOTAL);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [card, setCard] = useState<JSX.Element>(<NoChallengeInfo />);

  return (
    <TimerContext.Provider
      value={{ seconds, setSeconds, isActive, setIsActive, card, setCard }}
    >
      {props.children}
    </TimerContext.Provider>
  );
}
