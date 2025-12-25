"use client";
import { useState } from "react";

import { Box, Container, Button, Snackbar, Alert, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import GameChooseVariantType from "@/src/shared/ui/game-chose-variant-type/game-chose-variant-type";
import GameLimitPanel from "@/src/shared/ui/game-limit-panel/game-limit-panel";
import GameResultTable from "@/src/shared/ui/game-result/GameResultTable";
import GameGuessNumber from "@/src/shared/ui/game-guess-number/game-guess-number";
import { useGame } from "@/src/shared/hooks/useGame";
import { GuessVariantType } from "@/src/shared/types/common";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function Game() {
  const { results, limitResult, notification, runGame, closeNotification } = useGame();

  const [selectedVariant, setSelectedVariant] = useState<GuessVariantType>("under");
  const [guessValue, setGuessValue] = useState<number>(0);

  function onHandleSubmit() {
    runGame(selectedVariant, guessValue);
  }

  return (
    <Box component="section" paddingBlock="50px">
      <Container>
        <Box maxWidth="320px" marginInline="auto" marginBlockEnd="30px">
          <Box marginBlockEnd="16px">
            <GameLimitPanel value={limitResult} />
          </Box>
          <Box marginBlockEnd="20px">
            <GameChooseVariantType onClick={setSelectedVariant} />
          </Box>
          <Box marginBlockEnd="16px">
            <GameGuessNumber maxValue={limitResult} onChooseNumber={setGuessValue} stepSlider={20} />
          </Box>
          <Button color="primary" variant="contained" fullWidth onClick={onHandleSubmit}>
            Play
          </Button>
        </Box>
        {results.length ? <GameResultTable results={results} /> : null}
      </Container>
      {notification !== null && (
        <Snackbar
          open={notification.open}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={closeNotification}
        >
          <Alert
            variant="filled"
            severity={notification.variant}
            sx={{
              width: "600px"
            }}
            icon={notification.variant === "success" ? <CheckCircleOutlineIcon /> : <ErrorOutlineOutlinedIcon />}
          >
            <Typography>{notification.title}</Typography>
            {notification.text && <Typography>{notification.text}</Typography>}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}

export default Game;
