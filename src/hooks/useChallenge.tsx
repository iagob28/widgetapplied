import { useContext } from "react";
import { ChallengeContext } from "../contexts/challengeContext";

export function useChallenge() {
  const value = useContext(ChallengeContext);
  return value;
}
