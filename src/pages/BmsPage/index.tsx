import React from 'react'
import { IFrame } from '../DashboardPage'
import { Box } from '@mui/material'

const BmsPage = () => {
  return (
    <>
      <Box>
        <IFrame
          src='https://apps.powerapps.com/play/e/default-305b547b-ef68-4e05-8c58-9a98f2c3adb9/a/b1855d8a-0541-4fd5-b719-008cc0b8cb1c?tenantId=305b547b-ef68-4e05-8c58-9a98f2c3adb9&sourcetime=1722424840857'
          frameBorder={0}
          allowFullScreen={true}
        />
      </Box>
    </>
  )
}

export default BmsPage
