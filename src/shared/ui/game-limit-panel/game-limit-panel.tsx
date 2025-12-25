import { Box, Typography } from "@mui/material";

type GameLimitPanelProps = {
  value: number;
};

function GameLimitPanel({ value }: GameLimitPanelProps) {
  return (
    <Box bgcolor={(theme) => theme.palette.grey["100"]} paddingBlock="28px" borderRadius="4px">
      <Typography
        sx={{
          fontSize: "96px",
          fontWeight: "300",
          textAlign: "center"
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default GameLimitPanel;
