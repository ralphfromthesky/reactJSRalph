import { Box } from '@mui/material'
import React, {useState} from 'react'

const useHooksChild = (initialValue: any = false) => {
const [state, setState] = useState(initialValue)
const [isLogin, setIsLogin] = useState<any>(false)
const datass = 'ralph'
const toggle = () => {
    setState((prev :any) => !prev)
  }

  return [state, toggle, datass, isLogin, setIsLogin ]
}

export default useHooksChild