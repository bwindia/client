import { Box, CircularProgress, styled } from '@mui/material'
import React from 'react'

const CenterBox = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const PageLoader = () => {
  return (
    <CenterBox>
      <CircularProgress />
    </CenterBox>
  )
}

export default PageLoader
