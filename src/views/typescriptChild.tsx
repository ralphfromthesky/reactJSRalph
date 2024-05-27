import { Box, Typography } from '@mui/material'
import React from 'react'

type styleDaw = {
    name: React.CSSProperties
}

const TypescriptChild = (props: styleDaw) => {
  return (
    <Box>
        <div>
            <Typography variant="body1" color="initial">this style comes from parent</Typography>
        </div>
    </Box>
  )
}

export default TypescriptChild