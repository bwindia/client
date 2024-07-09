import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import bloodDrop from 'src/assets/images/blood-drop-collage.png'
import Typography from 'src/components/atoms/Typography'
import ProgramSection from 'src/components/organisms/ProgramSection'
import TeamSection from 'src/components/organisms/TeamSection'
import SEO from 'src/components/templates/SEO'
import theme from 'src/themes'
import {
  IMPACT,
  OUR_IMPACT,
  VISION_MISSION,
  WHO_WE_ARE,
  WHO_WE_ARE_CONTENT
} from 'src/utils/constants'

const PrimaryBackgroundBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '2rem 8vw'
}))

const NumberTypography = styled(Typography)({
  fontFamily: 'Manrope !important'
})

const AboutUsPage = () => {
  return (
    <>
      <SEO
        title='About Us | Blood Warriors | Support for Thalassemia Patients'
        description='Learn more about Blood Warriors, our mission, vision, and the team committed to supporting thalassemia patients.'
        keywords='About Blood Warriors, Thalassemia NGO, Thalassemia mission, Thalassemia vision, Thalassemia support team'
      />
      <Box px='8vw' pt='2vw' pb={3}>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          alignItems='center'
        >
          <Grid item xs>
            <Grid container direction='column' rowGap={5}>
              <Grid item>
                <Typography variant='h1' color={theme.palette.primary.main}>
                  {WHO_WE_ARE}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  color={theme.palette.text.secondary}
                >
                  {WHO_WE_ARE_CONTENT}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            textAlign='center'
            display={{ xs: 'none', sm: 'block' }}
          >
            <img src={bloodDrop} />
          </Grid>
        </Grid>
      </Box>
      <PrimaryBackgroundBox id='impact'>
        <Grid container direction='column' rowGap={4.5} justifyContent='center'>
          <Grid item>
            <Typography
              variant='h3'
              textAlign='center'
              color={theme.palette.structural.white}
            >
              {OUR_IMPACT}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={4.5}
              justifyContent='center'
              columns={{ xs: 2, md: 3, lg: 5 }}
            >
              {IMPACT.map((impact, index) => (
                <Grid item key={`impact-${index}`} xs={1}>
                  <Grid container direction='column' alignItems='center'>
                    <Grid item>
                      <NumberTypography
                        variant='h1'
                        color={theme.palette.structural.white}
                      >
                        {impact.count}
                      </NumberTypography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant='h5'
                        color={theme.palette.structural.white}
                        textAlign='center'
                      >
                        {impact.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </PrimaryBackgroundBox>
      <Box id='vision' px='8vw' py={{ xs: 4, md: 8 }}>
        <Grid container justifyContent='space-between' rowGap={3}>
          {VISION_MISSION.map((item) => (
            <Grid item key={item.title} xs={12} md={5}>
              <Grid container direction='column' rowGap={{ xs: 2, md: 6 }}>
                <Grid item>
                  <Typography
                    variant='h3'
                    textAlign={{ xs: 'left', md: 'center' }}
                    color={theme.palette.primary.main}
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography textAlign={{ xs: 'left', md: 'center' }}>
                    {item.content}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box id='program'>
        <ProgramSection />
      </Box>
      <Box id='team' px='8vw' py={{ xs: 4, md: 8 }}>
        <TeamSection />
      </Box>
    </>
  )
}

export default AboutUsPage
