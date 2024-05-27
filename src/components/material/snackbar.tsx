import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface Props {
  deleteSuccess: boolean;
  deleteMsg: string;
}

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar(props: any) {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  React.useEffect(() => {
    setState((prev) => ({ ...prev, open: props.deleteSuccess }));
  }, [props.deleteSuccess]); // Update the open state when deleteSuccess prop changes

  const handleClose = () => {
    setState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={props.deleteMsg}
        sx={{
         '&.MuiPaper-root, .MuiPaper-elevation, .MuiPaper-elevation6' : {
          backgroundColor: props.backGroundColor || props.backGColor,
          minWidth: '0'
         }
        }}
        key={vertical + horizontal}
        autoHideDuration={2000}
      />
    </Box>
  );
}
