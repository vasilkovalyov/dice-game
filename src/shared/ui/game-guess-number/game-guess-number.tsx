import { Slider } from "@mui/material";

type GameGuessNumberProps = {
  onChooseNumber: (value: number) => void;
  maxValue: number;
  stepSlider: number;
};

function GameGuessNumber({ maxValue, stepSlider, onChooseNumber }: GameGuessNumberProps) {
  function generateMarks() {
    const size = maxValue / stepSlider + 1;
    return Array.from(Array(size).keys()).map((item) => {
      if (item === 0) {
        return {
          value: 0,
          label: 0
        };
      }
      if (size === item + 1) {
        return {
          value: maxValue,
          label: maxValue
        };
      }
      return {
        value: item * stepSlider
      };
    });
  }

  return (
    <Slider
      valueLabelDisplay="auto"
      shiftStep={stepSlider}
      step={1}
      marks={generateMarks()}
      min={0}
      max={maxValue}
      onChange={(_, value) => {
        if (!Array.isArray(value)) {
          onChooseNumber(value);
        }
      }}
    />
  );
}

export default GameGuessNumber;
