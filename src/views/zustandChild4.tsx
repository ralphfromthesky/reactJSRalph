import { Box, Button } from "@mui/material";
import React from "react";
import { changeTheme, setData } from "../store/store.tsx";
import { useCustom } from "../customHooks/custom.tsx";


const ZustandChild4 = () => {
  const {useToggles} = setData()
  const { dark, darkTheme} = changeTheme();
  const [goTo] = useCustom()
  const useNav = () => {
    useToggles('make me sandwhich', 4)
    goTo('/zus')
    }
  return (
    <Box style={{backgroundColor: dark ? 'pink' : 'gray',margin: '10px 0',   display: 'flex',
    justifyContent: 'space-between',}}>
      {dark && <h1>this is child component 4</h1>}
      {!dark && <h1> no more! no more!</h1>}
      <Button  onClick={useNav}  variant="contained">click</Button>

    </Box>
  );
};

export default ZustandChild4;
