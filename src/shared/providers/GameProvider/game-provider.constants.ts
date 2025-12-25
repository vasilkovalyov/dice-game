import { GameContextType } from "./game-provider.type";

export const GAME_LIMIT_RESULT = 100;
export const GAME_MIN_RESULT = 0;

export const STORAGE_KEY = "dice-results";

export const LIMIT_RESULTS_TO_SHOW = 10;

export const NOTIFICATION_SUCCESS_TITLE = "You won";
export const NOTIFICATION_ERROR_TITLE = "You lost";
export const NOTIFICATION_ERROR_TEXT = "Number was higher";

export const initialState: GameContextType = {
  results: [],
  limitResult: GAME_LIMIT_RESULT,
  notification: {
    open: false,
    variant: "success",
    title: NOTIFICATION_SUCCESS_TITLE,
    text: null
  },
  runGame: () => {},
  closeNotification: () => {}
};
