import { Grid } from '@mui/material'
import React, { useEffect } from 'react'

const RecurringSection = () => {
  useEffect(() => {
    try {
      const rzpSubscribeForm = document.getElementById('rzp_subscription_form')
      if (rzpSubscribeForm !== null && !rzpSubscribeForm.hasChildNodes()) {
        const script = document.createElement('script')
        script.src =
          'https://cdn.razorpay.com/static/widget/subscription-button.js'
        script.async = true
        script.dataset.subscription_button_id = 'pl_OHnhuLPjAQisxK'
        script.dataset.button_theme = 'brand-color'
        rzpSubscribeForm.appendChild(script)
      }
    } catch (error) {}
  }, [])
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <form id='rzp_subscription_form'></form>
      </Grid>
    </Grid>
  )
}

export default RecurringSection
