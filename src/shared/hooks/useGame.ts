import { useContext } from "react";
import { GameContext } from "../providers/GameProvider/game-provider";

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("Use only inside provider GameContext");
  }

  return context;
}
