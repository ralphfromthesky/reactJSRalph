import React, { useState } from "react";

export const UseHooksChild2 = (initialValue: number = 100) => {
  const [state, setState] = useState(initialValue);

  const increment = () => {
    setState((prev: number) => prev + 1);
  };
  const decrement = () => {
    setState((prev: number) => prev - 1);
  };

  const restart = () => {
    setState(0)
  }

  return {state, increment, decrement, restart}
};

export const useMyCustomHooks = (firstName: any = 'ralph') => {
const [name, setName] = useState<any>(firstName)

const sampleToggle = () => {
  setName('this is rigor')
}

return [name, sampleToggle]
}