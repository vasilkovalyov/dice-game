"use client";

import { createContext, useMemo, memo, useState, useEffect, ReactNode } from "react";
import { GameContextType, GameNotificaitonProps } from "./game-provider.type";
import {
  GAME_LIMIT_RESULT,
  GAME_MIN_RESULT,
  initialState,
  LIMIT_RESULTS_TO_SHOW,
  NOTIFICATION_ERROR_TEXT,
  NOTIFICATION_ERROR_TITLE,
  NOTIFICATION_SUCCESS_TITLE,
  STORAGE_KEY
} from "./game-provider.constants";
import { GameResultType, GuessVariantType } from "@/types/common";

export const GameContext = createContext<GameContextType>(initialState);
GameContext.displayName = "GameContext";

function GameProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<GameResultType[]>([]);
  const [notification, setNotification] = useState<GameNotificaitonProps | null>(null);

  useEffect(() => {
    const resultsFromLocalStorage = getResultsFromStorage();
    if (resultsFromLocalStorage.length) {
      setResults(resultsFromLocalStorage.reverse());
    }
  }, []);

  function runGame(variant: GuessVariantType, guessValue: number) {
    const resultValue = getRandomValue();

    const game: GameResultType = {
      id: crypto.randomUUID(),
      dateTime: new Date().getTime(),
      guessVariant: variant,
      guess: guessValue,
      result: resultValue
    };

    if (isSuccessGuess(guessValue, resultValue, variant)) {
      setNotification({
        open: true,
        variant: "success",
        title: NOTIFICATION_SUCCESS_TITLE
      });
    } else {
      setNotification({
        open: true,
        variant: "error",
        title: NOTIFICATION_ERROR_TITLE,
        text: NOTIFICATION_ERROR_TEXT
      });
    }

    if (results.length >= LIMIT_RESULTS_TO_SHOW) {
      setResults((prev) => {
        const newArray = [game, ...prev.slice(0, -1)];
        return newArray;
      });
    } else {
      setResults((prev) => [game, ...prev]);
    }

    pushGameToStorage(game);
  }

  function isSuccessGuess(guess: number, result: number, variant: GuessVariantType): boolean {
    switch (variant) {
      case "over": {
        return guess > result;
      }
      case "under": {
        return guess > result;
      }
      default: {
        return false;
      }
    }
  }

  function closeNotification() {
    setNotification(null);
  }

  function getResultsFromStorage(): GameResultType[] {
    const resultsFromStorage = localStorage.getItem(STORAGE_KEY);
    if (resultsFromStorage !== null) return JSON.parse(resultsFromStorage) as GameResultType[];
    return [];
  }

  function pushGameToStorage(game: GameResultType) {
    const resultsFromStorage = getResultsFromStorage();
    resultsFromStorage.push(game);

    if (resultsFromStorage.length > LIMIT_RESULTS_TO_SHOW) {
      resultsFromStorage.shift();
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(resultsFromStorage));
  }

  function getRandomValue(): number {
    return Math.floor(Math.random() * (GAME_LIMIT_RESULT - GAME_MIN_RESULT + 1)) + GAME_MIN_RESULT;
  }

  const values: GameContextType = useMemo(() => {
    return {
      ...initialState,
      results,
      notification,
      runGame,
      closeNotification
    };
  }, [results, notification]);

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}

const GameProviderMemo = memo(GameProvider);

export { GameProviderMemo as GameProvider };
