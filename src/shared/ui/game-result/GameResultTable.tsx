import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { GameResultType } from "@/types/common";
import { getTimeFromDate } from "@/utils/common";

type GameResultTableProps = {
  results: GameResultType[];
};

function GameResultTable({ results }: GameResultTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight={500}>
                Time
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight={500}>
                Guess
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight={500}>
                Result
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(({ id, result, dateTime, guess, guessVariant }) => (
            <TableRow key={id}>
              <TableCell
                sx={{
                  paddingBlock: "4px"
                }}
              >
                <Typography variant="body2">{getTimeFromDate(new Date(dateTime))}</Typography>
              </TableCell>
              <TableCell
                sx={{
                  paddingBlock: "4px"
                }}
              >
                <Typography variant="body2">
                  {guessVariant === "over" ? "Over" : "Under"} {"  "} {guess}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  paddingBlock: "4px"
                }}
              >
                <Typography variant="body2" color={guess > result ? "success" : "error"}>
                  {result}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameResultTable;
