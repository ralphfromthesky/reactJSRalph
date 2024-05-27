import React from "react";
import Main from "../components/main/main";
import { Box, Button, Typography } from "@mui/material";
import useHooksChild from "./useHooksChild.tsx";
import {UseHooksChild2, useMyCustomHooks} from "./useHooksChild2.tsx";
import { useCatData } from "../react-query/catHooks.tsx";

const UseHooks = () => {
  const { data, isError, isSuccess, isLoading, refetch, error} = useCatData();
  const [state, toggle, datass] = useHooksChild();
  const [name, sampleToggle] = useMyCustomHooks()
  const {
    state: initialValue,
    increment,
    decrement,
    restart,
  } = UseHooksChild2();
  return (
    <Main>
      <Box sx={{ padding: "50px" }}>
        <Typography variant="body1" component="h1">
          UseHooks - {name} 
        </Typography>
        <Button onClick={sampleToggle}>change</Button>
        <Button variant="contained" color="success" onClick={toggle}>
          {state ? "hook" : "hooker"}
        </Button>
        <Typography variant="body1" color="initial">
          {state && `this showing by boolean => ${datass}`}
        </Typography>
        <Typography variant="body1" color="initial" component="h1">
          {state && "show this hooks"}
        </Typography>
        {state && (
          <Box>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAhvc-YjdwsimlEYdOknxcvbgNOVSHWjkWQ&usqp=CAU"
              alt=""
            />
          </Box>
        )}
        <br />
        <br />
        <br />
        <Box>
          {initialValue} <br />
          <br />
          <Button variant="contained" color="success" onClick={increment}>
            INCREMENT
          </Button>
          <br />
          <Button variant="contained" color="secondary" onClick={decrement}>
            DECREMENT
          </Button>
          <br />
          <Button variant="contained" color="error" onClick={restart}>
            RESTART
          </Button>
        </Box>
        <br />
        <Box>
          <Typography variant="body1" color="initial">
            Custom hooks in React are reusable JavaScript functions that contain
            logic shared between multiple components. They allow you to extract
            stateful logic from components, making your code more organized,
            reusable, and easier to maintain. <br />
            <br /> Here's a simple explanation:
            <br />
            <br />
            Reusable Logic:
            <br /> Custom hooks allow you to extract common logic, such as state
            management, side effects, or computations, into a separate function.
            Functionality Sharing: Once you create a custom hook, you can use it
            across different components in your application, reducing code
            duplication. <br />
            <br />
            Naming Convention: <br />
            Custom hooks always start with the word "use" (e.g., useCustomHook).
            This convention is important because it tells React that the
            function is a hook and enables certain features like linting rules.{" "}
            <br />
            Independence from Components:
            <br />
            <br />
            Custom hooks are not tied to any specific component. They are
            standalone functions that can hold their own state and perform
            operations independently.
            <br /> <br />
            Encapsulation:
            <br /> Custom hooks encapsulate related logic, making your code more
            modular and easier to understand. Here's a simple example of a
            custom hook that manages state:
          </Typography>
          <br />
          <Box sx={{ width: "100%" }}>
            <img src="image/customHooks.png" alt="" width="100%" />
          </Box>
          <br />
          <Typography variant="body1" component="h1">
            In summary, custom hooks in React provide a way to encapsulate and
            share logic between components, leading to cleaner, more
            maintainable code.
          </Typography>
        </Box>
        <br />
        <br />
        {isError && error.message}
        {isLoading && 'Data is Loading....'}
        {isSuccess && 'Data succesfully loaded!'}
        <Button variant="contained" color="error" onClick={() => refetch()}>{isSuccess ? 'fetch from custom hooks' : 'fetch'}</Button>
        {data?.data?.map((value: any, index: any) => (
          <Box> {value.title}</Box>
        ))}
      </Box>
    </Main>
  );
};

export default UseHooks;
