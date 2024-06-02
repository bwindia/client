import { TabContext, TabList } from '@mui/lab'
import { Box, Grid, Tab, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Typography from 'src/components/atoms/Typography'
import OneTimeSection from './OneTimeSection'
import RecurringSection from './RecurringSection'

const RecurringBox = styled(Grid)((props: { value: string }) => ({
  display: props.value === '1' ? 'block' : 'none',
  marginTop: '2rem'
}))

const OneTimeBox = styled(Grid)((props: { value: string }) => ({
  display: props.value === '2' ? 'block' : 'none',
  marginTop: '2rem'
}))

const RazorPayDonationSection = () => {
  const [value, setValue] = useState('1')

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    try {
      const rzpSubscribeForm = document.getElementById('rzp_subscription_form')
      if (rzpSubscribeForm !== null && !rzpSubscribeForm.hasChildNodes()) {
        const script = document.createElement('script')
        script.src =
          'https://cdn.razorpay.com/static/widget/subscription-button.js'
        script.async = true
        script.dataset.subscription_button_id = 'pl_OH8gtGKpyWLire'
        script.dataset.button_theme = 'brand-color'
        rzpSubscribeForm.appendChild(script)
      }
    } catch (error) {}
  }, [])

  return (
    <Grid container direction='column'>
      <Grid item>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} centered>
              <Tab
                label={<Typography variant='h5'>Recurring</Typography>}
                value='1'
              />
              <Tab
                label={<Typography variant='h5'>One Time</Typography>}
                value='2'
              />
            </TabList>
          </Box>
          <RecurringBox value={value}><RecurringSection /></RecurringBox>
          <OneTimeBox value={value}><OneTimeSection /></OneTimeBox>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default RazorPayDonationSection
