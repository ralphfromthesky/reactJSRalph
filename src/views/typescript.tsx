import React from "react";
import Main from "../components/main/main";
import { Box, Typography } from "@mui/material";
import { changeTheme } from "../store/store.tsx";

const Typescript = () => {
  const { dark } = changeTheme();

  let myNumber: number = 42;
  let myString: string = "Hello";
  let myBoolean: boolean = true;
  let myArray: number[] = [1, 2, 3];
  let myTuple: [string, number] = ["Alice", 30];
  let myAny: any = 10;
  let myVoid: void = undefined;

  function add(x: number, y: number): number {
    return x + y;
  }
  
  let result: number = add(5, 3);
  console.log(result); 
  

  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        
        <Typography variant="body1" color="initial" sx={{color: dark ? 'black' : 'white' }}>
          What is TypeScript?
          <br />
          <br />
          TypeScript is a programming language that builds on top of JavaScript
          by adding static types. It's a superset of JavaScript, meaning any
          valid JavaScript code is also valid TypeScript code. TypeScript adds
          features to JavaScript to help catch errors and make it easier to
          build and maintain large-scale applications.
          <br />
          <br /> What are static types? Static types refer to the ability to
          specify the type of variables, function parameters, and return values
          in your code. For example, you can declare that a variable is a
          number, string, boolean, etc. This allows the TypeScript compiler to
          check your code for type errors at compile time, before it runs,
          helping to catch many common bugs. Why use TypeScript? <br />
          <br />
          Type Safety: <br />
          TypeScript helps catch errors early by enforcing type checks. This can
          prevent many runtime errors that might occur in JavaScript. Enhanced
          Tooling: TypeScript provides better tooling support, such as code
          editors, IDEs, and linters, which can offer features like code
          completion, refactoring, and better documentation. <br />
          <br />
          Readability and Maintainability:
          <br /> Adding types to your code can make it easier to understand and
          maintain, especially in large projects where the codebase is complex
          and constantly evolving. How does TypeScript work? When you write
          TypeScript code, you use type annotations to specify the types of
          variables, function parameters, and return values. <br />
          <br />
          For example:
          <br />     <br />
        </Typography>
        <Box>
          <img src='image/type.png' alt="" />
        </Box>
      </Box>
    </Main>
  );
};

export default Typescript;
