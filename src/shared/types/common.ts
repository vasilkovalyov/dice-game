export type GameResultType = {
  id: string;
  dateTime: number;
  guess: number;
  result: number;
  guessVariant: GuessVariantType;
};

export type GuessVariantType = "over" | "under";
