import { Box } from '@mui/material'
import React, {useState} from 'react'

const useHooksChild = (initialValue: any = false) => {
const [state, setState] = useState(initialValue)
const datass = 'ralph'
const toggle = () => {
    setState((prev :any) => !prev)
  }

  return [state, toggle, datass ]
}

export default useHooksChild