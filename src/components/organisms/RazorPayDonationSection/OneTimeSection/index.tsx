import { Divider, Grid, styled } from '@mui/material'
import React, { useEffect } from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'

const DashedDivider = styled('div')({
  width: '100%',
  margin: '1rem 0',
  border: `1px dashed ${theme.palette.text.secondary}`
})

const SolidDivider = styled(Divider)({
  '&::before, &::after': {
    borderColor: theme.palette.text.secondary
  }
})

const OneTimeSection = () => {
  useEffect(() => {
    try {
      const rzpPaymentForm = document.getElementById('rzp_payment_form')
      if (rzpPaymentForm !== null && !rzpPaymentForm.hasChildNodes()) {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
        script.async = true
        script.dataset.payment_button_id = 'pl_NEvNOxgmZVJLmg'
        rzpPaymentForm.appendChild(script)
      }
    } catch (error) {}
  }, [])
  return (
    <Grid container direction='column' rowGap={3}>
      <Grid item>
        <Grid container columnGap={2} justifyContent='center'>
          <Grid item>
            <Typography variant='h5' fontWeight={1000}>
              Donate here directly
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' fontWeight={1000}>
              &#8594;
            </Typography>
          </Grid>
          <Grid item>
            <form id='rzp_payment_form'></form>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <SolidDivider>
          <Typography variant='h5' fontWeight={1000}>
            OR
          </Typography>
        </SolidDivider>
      </Grid>
      <Grid item>
        <Grid container direction='column' rowGap={4.5}>
          <Grid item>
            <Typography variant='h3'>Bank Account Details</Typography>
          </Grid>
          <Grid item>
            <Grid container direction='column' rowGap={1}>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  Organization Name: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  Blood Warriors Foundation
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  UPI ID: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  Yet to be updated
                </Typography>
              </Grid>
            </Grid>
            <DashedDivider />

            <Grid container direction='column' rowGap={1}>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  Bank Name: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  Axis Bank Limited
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  Branch: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  Sri Nagar Colony, Hyderabad
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  Account Number: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  922010064997144
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  IFSC Code: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  UTIB0000425
                </Typography>
              </Grid>
            </Grid>
            <DashedDivider />
            <Grid container direction='column' rowGap={1}>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  Swift Code: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  AXISINBB515
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' fontWeight={1000} component='span'>
                  80G Exception: &nbsp;
                </Typography>
                <Typography variant='h5' component='span'>
                  YES
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OneTimeSection
