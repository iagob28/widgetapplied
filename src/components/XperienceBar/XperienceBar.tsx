import { useState } from "react";
import { Text } from "../Text/Text";
import "./XperienceBar.css"

export function XperienceBar() {
  const [userXp, setUserXp] = useState(300);
  const displayUserXp = (userXp / 600) * 100;
  return (
    <header>
      <Text>0xp</Text>
      <div
        style={{
          background: `linear-gradient(to right, #4CD62B, #4CD62B ${displayUserXp}%, #b6b6b6 1%)`,
        }}
      ></div>
      <Text>600xp</Text>
    </header>
  );
}
