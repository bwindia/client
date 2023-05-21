import { Button as MuiButton, ButtonProps, styled } from '@mui/material'
import React from 'react'
import theme from 'src/themes'

interface Props extends ButtonProps {
  width?: string
  outlineColor?: string
}

const StyledButton = styled(MuiButton)((props: Props) => ({
  width: props.width,
  ...(props.variant === 'outlined' && {
    border: props.outlineColor
      ? `1px solid ${props.outlineColor}`
      : `1px solid ${theme.palette.text.primary}`,
    color: props.outlineColor ? props.outlineColor : theme.palette.text.primary,
    '&:hover': {
      border: props.outlineColor
        ? `1px solid ${props.outlineColor}`
        : `1px solid ${theme.palette.text.primary}`
    }
  })
}))

const Button = (props: Props) => {
  return <StyledButton {...props} />
}

export default Button
