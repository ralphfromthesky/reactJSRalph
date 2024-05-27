import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { changeTheme, passDataFromComponent, setData } from "../store/store.tsx";
import { useGetdata } from "../react-query/gethooks.tsx";
import { useCustom } from "../customHooks/custom.tsx";


const ZustandChild1 = () => {
  const [goTO, name]: any = useCustom()
  const useData = useGetdata();
  const {useToggles, show} = setData()

  const data = passDataFromComponent((state) => state.valueOrData);
  const { dark, darkTheme } = changeTheme();
  const useNav = () => {
    useToggles('ralph is good', 1)
    goTO('/zus')
    }
  return (
    <div
      style={{
        backgroundColor: dark ? "pink" : "yellow",
        margin: "10px 0",
        display: 'flex',
        justifyContent: 'space-between',
        color: dark ? 'white' : 'black' 
      }}
    >
      {dark && <h1>this is child component 1</h1>}
      <h1>and this is the name - {name}</h1>
      {!dark && <h1> using zustand state management</h1>}
      <Button  onClick={useNav}  variant="contained">click</Button>
    </div>
  );
};

export default ZustandChild1;
