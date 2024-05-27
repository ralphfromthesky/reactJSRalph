import React from 'react'
import { useNavigate } from 'react-router-dom'


export const useCustom = () => {
    const name = 'ralph'
    const navigate = useNavigate()

    const goTo = (link: any) => {
        navigate(link)
    }
   return [goTo, name];
}

