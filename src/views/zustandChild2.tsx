import { Box, Button } from "@mui/material";
import React from "react";
import { changeTheme, setData } from "../store/store.tsx";
import { useCustom } from "../customHooks/custom.tsx";


const ZustandChild2 = () => {
  const {useToggles} = setData()
  const { dark, darkTheme} = changeTheme();
  const [goTo] = useCustom()

  const useNav = () => {
    useToggles('ralph ano ginagawa mo?', 2)
    goTo('/zus')
    }
  return (
    <div style={{backgroundColor: dark ? 'pink' : 'blue', margin: '10px 0',  display: 'flex',
    justifyContent: 'space-between',}}>
      {dark && <h1>this is child component 2</h1>}
      {!dark && <h1> for state handling</h1>}
      <Button  onClick={useNav}  variant="contained">click</Button>

    </div>
  );
};

export default ZustandChild2;
