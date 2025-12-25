import { FC, ReactElement } from "react";

import Game from "@/widgets/components/game/game";

import { GameProvider } from "@/src/shared/providers/GameProvider/game-provider";

const DicePageContainer: FC = (): ReactElement => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default DicePageContainer;
