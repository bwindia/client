import { Grid } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import { Container } from 'src/pages/PrivacyPolicyPage'
import { CANCELLATION_POLICY } from 'src/utils/constants'

const CancellationPolicyPage = () => {
  return (
    <Container container direction='column' rowGap={5}>
      <Grid item>
        <Typography variant='h3'>{CANCELLATION_POLICY}</Typography>
      </Grid>
      <Grid item>
        <Typography>
          Please note that cancellation are not applicable for Blood Warriors.
          If you have any questions please reach out to contact@bloodwarriors.in
        </Typography>
      </Grid>
    </Container>
  )
}

export default CancellationPolicyPage
