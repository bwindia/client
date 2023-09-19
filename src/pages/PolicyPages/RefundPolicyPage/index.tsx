import { Grid } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import { Container } from 'src/pages/PrivacyPolicyPage'
import { REFUND_POLICY } from 'src/utils/constants'

const RefundPolicyPage = () => {
  return (
    <Container container direction='column' rowGap={5}>
      <Grid item>
        <Typography variant='h3'>
            {REFUND_POLICY}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Please note that refunds are not applicable for donations. If you have
          any questions please reach out to contact@bloodwarriors.in
        </Typography>
      </Grid>
    </Container>
  )
}

export default RefundPolicyPage
