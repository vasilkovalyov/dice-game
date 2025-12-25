import { GameResultType, GuessVariantType } from "@/types/common";

export type GameContextType = {
  results: GameResultType[];
  limitResult: number;
  notification: GameNotificaitonProps | null;
  runGame: (variant: GuessVariantType, guessValue: number) => void;
  closeNotification: () => void;
};

export type GameNotificaitonProps = {
  open: boolean;
  variant: "success" | "error";
  title: string;
  text?: string | null;
};
