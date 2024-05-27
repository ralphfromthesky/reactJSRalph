import React from "react";
import Main from "../components/main/main";
import { changeTheme, setData } from "../store/store.tsx";
import { Button } from "@mui/material";
import { useCustom } from "../customHooks/custom.tsx";

const ZustandChildViewPage = () => {
  const [goTO] = useCustom()
  const {dark} = changeTheme();
  const { number, value, show } = setData();
  const nav = () => {
    goTO(-1)
  }
  return (
    <Main>
      <div style={{height: dark ? '' : '100vh'}}>
      {number == 1 && (
        <div>
          <h1>
            this is the number pass from zusstand - {number} and the message is - 
            {value}
          </h1>
          <Button variant="contained" onClick={nav}>Back</Button>
        </div>
      )}
      {number == 2 && (
        <div>
          <h1>
            this is the number pass from zusstand - {number} and the message is
             - {value}
          </h1>
          <Button variant="contained" onClick={nav}>Back</Button>

        </div>
      )}
            {number == 3 && (
        <div>
          <h1>
            this is the number pass from zusstand - {number} and the message is - 
            {value}
          </h1>
          <Button variant="contained" onClick={nav}>Back</Button>

        </div>
      )}
            {number == 4 && (
        <div>
          <h1>
            this is the number pass from zusstand watsx up- {number} and the message is - 
            {value}
          </h1>
          <Button variant="contained" onClick={nav}>Back</Button>

        </div>
      )}
      </div>
    </Main>
  );
};

export default ZustandChildViewPage;
