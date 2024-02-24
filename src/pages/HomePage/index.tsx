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
import TestimonialGroup from 'src/components/organisms/TestimonialGroup'
import OurApproach from 'src/components/molecules/OurApproach'
import VisionValuesSection from 'src/components/molecules/VisionValues'
import JounreySection from 'src/components/molecules/JourneySection'

interface SectionProps {
  px?: string
  py?: string
  background?: string
}

export const Section = styled(Box)(
  ({
    background = theme.palette.structural.white,
    ...props
  }: SectionProps) => ({
    background,
    padding: '4rem 8vw',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 8vw'
    }
  })
)

export const ImapctGroup = styled(Grid)({
  maxWidth: 'calc((300px + 24px) * 3)',
  margin: 'auto'
})

export const ImpactCard = styled(Box)({
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
        <Grid container alignItems='center' rowGap={3} columnSpacing={'8vw'}>
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
                <a
                  href='https://bit.ly/bloodbridge'
                  target='blank'
                >
                  <Button variant='contained' size='large'>
                    {GET_BLOOD_NOW}
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section id='thalassemia-stats'>
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
                  rowGap={4}
                  justifyContent={{ xs: 'center', md: 'space-between' }}
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
            <ImapctGroup
              container
              rowGap={3}
              columnGap={3}
              justifyContent='center'
              columns={{ xs: 1, sm: 3 }}
            >
              {THALASSEMIA_IMPACT.map((item, index) => (
                <Grid item key={`thalassemia-impact-${index}`}>
                  <ImpactCard>
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
                </Grid>
              ))}
            </ImapctGroup>
          </Grid>
        </Grid>
      </Section>
      <Section id='approach'>
        <OurApproach />
      </Section>
      <Section id='vision-values'>
        <VisionValuesSection />
      </Section>
      <Section id='journey'>
        <JounreySection />
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
      <Section id='testimonials'>
        <Grid container justifyContent='center' direction='column' rowGap={4}>
          <Grid item>
            <Typography variant='h3' textAlign='center'>
              {TESTIMONIAL_SECTION_TITLE}
            </Typography>
          </Grid>
          <Grid item>
            <TestimonialGroup />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default HomePage
