import React from 'react'
import {
  TextField as MuiTextField,
  OutlinedTextFieldProps,
  StandardTextFieldProps
} from '@mui/material'

const Input = (props: OutlinedTextFieldProps | StandardTextFieldProps) => {
  return <MuiTextField {...props} />
}

export default Input
