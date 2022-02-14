import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Text } from "../Text/Text";
import "./XperienceBar.css";

export function XperienceBar() {
  const { user } = useAuth();
  const maxXp = Math.pow(parseInt(user.level), 2) * 600;
  const minXP = Math.pow(parseInt(user.level) - 1, 2) * 600;
  const displayUserXp = ((parseInt(user.xp) - minXP) / (maxXp - minXP)) * 100;

  return (
    <header>
      <Text>{minXP}xp</Text>
      <div
        style={{
          background: `linear-gradient(to right, #4CD62B, #4CD62B ${displayUserXp}%, #b6b6b6 1%)`,
        }}
      ></div>
      <Text>{maxXp}xp</Text>
    </header>
  );
}
