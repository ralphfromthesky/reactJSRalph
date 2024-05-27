import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import Rightbar from "../rightbar";
import Add from "../add";
import { changeTheme } from "../../store/store.tsx";

const Main = (props) => {
  const { dark } = changeTheme();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            backgroundColor: dark ? "" : "#1c1e23",
            color: dark ? "" : "white",
          }}
        >
          <Navbar />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Sidebar setMode={setMode} mode={mode} name="ralph" />
            <Box
              sx={{
                width: { xs: "100%", sm: "50vw" },
                padding: {xs: '10px'}
              }}
            >
              {props.children}
            </Box>
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Main;
