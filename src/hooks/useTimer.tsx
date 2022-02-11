import { useContext } from "react";
import { TimerContext } from "../contexts/timerContext";

export function useTimer() {
  const value = useContext(TimerContext);
  return value;
}
