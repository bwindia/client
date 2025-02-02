import { Box, Grid } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import illustration from 'src/assets/illustrations/contribute.svg'
import theme from 'src/themes'
import RazorPayDonationSection from 'src/components/organisms/RazorPayDonationSection'
import SEO from 'src/components/templates/SEO'

const DonationPage = () => {
  return (
    <>
      <SEO
        title='Donate | Blood Warriors | Support Thalassemia Patients'
        description='Make a difference in the lives of thalassemia patients by donating to Blood Warriors. Your support helps provide essential treatments and care.'
        keywords='Donate for Thalassemia, Thalassemia donations, Support Thalassemia patients, Thalassemia charity, Blood Warriors donations, Help Thalassemia patients, Funds, 80G Tax'
      />
      <Box p='8vw'>
        <Grid container columnSpacing={16}>
          <Grid item md={6} display={{ xs: 'none', md: 'block' }}>
            <Grid container direction='column' rowGap={4.5} alignItems='center'>
              <Grid item>
                <img src={illustration} />
              </Grid>
              <Grid item>
                <Typography variant='h3' component='span'>
                  Contribute Now and Join the Fight Against&nbsp;
                </Typography>
                <Typography
                  variant='h3'
                  color={theme.palette.primary.main}
                  component='span'
                >
                  Thalassemia&nbsp;
                </Typography>
                <Typography variant='h3' component='span'>
                  with Blood Warriors Foundation!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <RazorPayDonationSection />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default DonationPage
