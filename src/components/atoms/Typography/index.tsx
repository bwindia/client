import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import React from 'react'

interface Props extends TypographyProps {
  component?: string
}

const Typography = (props: Props) => {
  return <MuiTypography {...props} />
}

export default Typography
