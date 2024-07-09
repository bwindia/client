import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import logo from 'src/assets/logos/Blood Warriors Logo Vector.png'
import { SocialGroup } from 'src/components/organisms/Footer'
import SEO from 'src/components/templates/SEO'

const TextContainer = styled(Grid)({
  maxWidth: '40rem',
  margin: 'auto',
  textAlign: 'center',
  width: 'calc(100% - 2rem)'
})

const Card = styled(Grid)({
  width: 'calc(100% - 2rem)',
  maxWidth: '72rem',
  margin: 'auto',
  boxShadow: '0px 10px 60px 0px rgba(71,74,182,0.12)'
})

const LogoContainer = styled(Grid)(({ theme }) => ({
  background: theme.palette.structural.white,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem 0',
  height: '100%'
}))
const PrimaryContainer = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '4rem 2rem',
  color: theme.palette.structural.white,
  height: '100%'
}))

const WhiteTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.structural.white
}))

const ContactUsPage = () => {
  return (
    <>
      <SEO
        title='Contact Us | Blood Warriors | Reach Out for Thalassemia Support and Blood Donations'
        description='Get in touch with Blood Warriors for more information about our services, events, or how you can support thalassemia patients.'
        keywords='Contact Blood Warriors, Thalassemia support contact, Thalassemia inquiries, Thalassemia help, Thalassemia support contact details'
      />
      <Grid container direction='column' my='6vw' rowGap={8}>
        <Grid item>
          <TextContainer container direction='column' rowGap={3}>
            <Grid item>
              <Typography variant='h3'>Contact Us</Typography>
            </Grid>
            <Grid item>
              <Typography>
                For any inquiries, feedback, or collaboration opportunities,
                please don’t hesitate to reach out to us. We look forward to
                hearing from you and being a part of our mission to save lives
                through blood donation.
              </Typography>
            </Grid>
          </TextContainer>
        </Grid>
        <Grid item>
          <Card container>
            <Grid item xs={12} md={7}>
              <LogoContainer container>
                <img src={logo} height={300} />
              </LogoContainer>
            </Grid>
            <Grid item xs={12} md={5}>
              <PrimaryContainer container direction='column' rowGap={6}>
                <Grid item>
                  <WhiteTypography variant='h3'>Contact Info</WhiteTypography>
                </Grid>
                <Grid item>
                  <WhiteTypography fontWeight={1000}>
                    Registered Office
                  </WhiteTypography>
                  <WhiteTypography>
                    Address: Door no. 1-1-593/B, Gandhi Nagar, Near Pranav Apts,
                    Musheerabad, HYDERABAD, Telangana, India
                  </WhiteTypography>
                </Grid>
                <Grid item>
                  <WhiteTypography fontWeight={1000}>
                    Head Office
                  </WhiteTypography>
                  <WhiteTypography>
                    Address: Blood Warriors Foundation MCH No.10-2-289/120/30/2,
                    332/2RT, near Ratnadeep Supermarket, Vijaynagar Colony,
                    Potti Sriramulu Nagar, Masab Tank, Hyderabad, Telangana
                    500057 <br />
                    <br />
                  </WhiteTypography>
                  <WhiteTypography fontWeight={1000}>Map Link:</WhiteTypography>
                  <WhiteTypography>
                    <a href='https://maps.app.goo.gl/Sk2Rpk5ihrmoAtUcA'>
                      https://maps.app.goo.gl/Sk2Rpk5ihrmoAtUcA
                    </a>
                  </WhiteTypography>
                </Grid>
                <Grid item>
                  <Grid container direction='column'>
                    <Grid item>
                      <WhiteTypography fontWeight={1000} component='span'>
                        Email :{' '}
                      </WhiteTypography>
                      <WhiteTypography component='span'>
                        contact@bloodwarriors.in
                      </WhiteTypography>
                    </Grid>
                    <Grid item>
                      <WhiteTypography fontWeight={1000} component='span'>
                        Phone :{' '}
                      </WhiteTypography>
                      <WhiteTypography component='span'>
                        +91 90001 90002
                      </WhiteTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <SocialGroup />
                </Grid>
              </PrimaryContainer>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default ContactUsPage
