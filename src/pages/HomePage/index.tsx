import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import theme from 'src/themes'
import heroSection from 'src/assets/illustrations/hero-section.svg'
import Typography from 'src/components/atoms/Typography'
import Button from 'src/components/atoms/Button'
import {
  GET_BLOOD_NOW,
  HERO_SECTION,
  OUR_PARTNERS,
  TESTIMONIAL_SECTION_TITLE,
  THALASSEMIA_IMPACT,
  THALASSEMIA_INFO,
  WHAT_THALASSEMIA
} from 'src/utils/constants'
import Footer from 'src/components/organisms/Footer'
import TestimonialGroup from 'src/components/organisms/TestimonialGroup'
import OurApproach from 'src/components/molecules/OurApproach'
import VisionValuesSection from 'src/components/molecules/VisionValues'

interface SectionProps {
  px?: string
  py?: string
  background?: string
}

export const Section = styled(Box)(
  ({
    px = '8vw',
    py = '8vw',
    background = theme.palette.structural.white,
    ...props
  }: SectionProps) => ({
    background,
    padding: `${py} ${px}`
  })
)
export const ImpactCard = styled(Grid)({
  width: '300px',
  maxWidth: '300px !important',
  padding: '2rem 0',
  boxShadow: '0px 4px 75px 1px rgba(165, 164, 164, 0.20)'
})

export const Image = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '50%',
  width: '60px',
  height: '60px'
}))

const HomePage = () => {
  return (
    <>
      <Section id='hero'>
        <Grid container alignItems='center' columnSpacing={'8vw'}>
          <Grid item xs={12} md={6}>
            <img src={heroSection} width='100%' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction='column' rowGap={4.5}>
              <Grid item>
                <Typography variant='h1'>{HERO_SECTION.title}</Typography>
              </Grid>
              <Grid item>
                <Typography color={theme.palette.text.secondary}>
                  {HERO_SECTION.subContent}
                </Typography>
              </Grid>
              <Grid item>
                <Button variant='contained' size='large'>
                  {GET_BLOOD_NOW}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      {/* <Section id='donation-requests' py='0'>
        <DonationRequestsGroup />
      </Section> */}
      <Section id='thalassemia-stats' py='0'>
        <Grid container rowGap={12} direction='column'>
          <Grid item>
            <Grid container direction='column' rowGap={4}>
              <Grid item>
                <Grid container direction='column' rowGap={2}>
                  <Grid item>
                    <Typography variant='h3'>
                      {WHAT_THALASSEMIA.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color={theme.palette.text.secondary}>
                      {WHAT_THALASSEMIA.content}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  columns={{ xs: 1, md: 2, lg: 3 }}
                  justifyContent='space-between'
                >
                  {THALASSEMIA_INFO.map((item, index) => (
                    <Grid item xs='auto' key={`thalassemia-info-${index}`}>
                      <Grid
                        container
                        direction='column'
                        width='fit-content'
                        rowGap={4.5}
                      >
                        <Grid item width={293}>
                          <img src={item.image} width='293' />
                        </Grid>
                        <Grid item width={293}>
                          <Typography color={theme.palette.text.secondary}>
                            {item.content}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container gap={3} justifyContent='center'>
              {THALASSEMIA_IMPACT.map((item, index) => (
                <ImpactCard item key={`thalassemia-impact-${index}`}>
                  <Grid
                    container
                    alignItems='center'
                    direction='column'
                    rowGap={3}
                  >
                    <Image
                      item
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <img src={item.icon} width='40' height='40' />
                    </Image>
                    <Grid item>
                      <Grid container direction='column' alignItems='center'>
                        <Grid item>
                          <Typography variant='h3'>{item.count}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography color={theme.palette.text.secondary}>
                            {item.content}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ImpactCard>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section id='approach'>
        <OurApproach />
      </Section>
      <Section id='vision-values' py='0'>
        <VisionValuesSection />
      </Section>
      <Section id='partners'>
        <Grid container direction='column' rowGap={6}>
          <Grid item>
            <Typography variant='h3' textAlign='center'>
              {OUR_PARTNERS.title}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container gap={8} justifyContent='center'>
              {OUR_PARTNERS.partners.map((partner, index) => (
                <Grid item key={`partner-${index + 1}`}>
                  <img src={partner} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section id='testimonials' py='0'>
        <Grid container justifyContent='center' rowGap={12} pb='8vw'>
          <Grid item>
            <Typography variant='h3'>{TESTIMONIAL_SECTION_TITLE}</Typography>
          </Grid>
          <TestimonialGroup />
        </Grid>
      </Section>
      <Footer />
    </>
  )
}

export default HomePage
