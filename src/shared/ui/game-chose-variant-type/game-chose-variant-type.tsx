"use client";

import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { GuessVariantType } from "@/types/common";

type GameChooseVariantTypeProps = {
  onClick: (type: GuessVariantType) => void;
};

function GameChooseVariantType({ onClick }: GameChooseVariantTypeProps) {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="under"
      sx={{
        justifyContent: "center",
        flexDirection: "row"
      }}
    >
      <FormControlLabel value="under" control={<Radio />} label="Under" onChange={() => onClick("under")} />
      <FormControlLabel value="over" control={<Radio />} label="Over" onChange={() => onClick("over")} />
    </RadioGroup>
  );
}

export default GameChooseVariantType;
