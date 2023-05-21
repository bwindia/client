import { Grid, styled } from '@mui/material'
import React from 'react'
import Navbar from 'src/components/organisms/NavBar'
import theme from 'src/themes'
import illustration from 'src/assets/images/illustration.svg'
import Typography from 'src/components/atoms/Typography'
import Button from 'src/components/atoms/Button'
import {
  GET_BLOOD_NOW,
  HERO_SECTION,
  TESTIMONIALS,
  TESTIMONIAL_SECTION_TITLE
} from 'src/utils/constants'
import TestimonialCard from 'src/components/molecules/TestimonialCard'
import Footer from 'src/components/organisms/Footer'
import DonationRequestsGroup from 'src/components/organisms/DonationRequestGroup'

interface SectionProps {
  px?: string
  py?: string
  background?: string
}

export const Section = styled('section')(
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

const HomePage = () => {
  return (
    <>
      <Navbar active={0} />
      <Section id='hero'>
        <Grid container alignItems='center'>
          <Grid item xs={6}>
            <img src={illustration} width='100%' />
          </Grid>
          <Grid item xs={6}>
            <Grid container direction='column' pl='8vw' rowGap={4.5}>
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
      <Section id='donation-requests' py='0'>
        <DonationRequestsGroup />
      </Section>
      <Section id='testimonials'>
        <Grid container justifyContent='center' rowGap={12}>
          <Grid item>
            <Typography variant='h3' color={theme.palette.primary.main}>
              {TESTIMONIAL_SECTION_TITLE}
            </Typography>
          </Grid>
          {TESTIMONIALS.map((testimonial, index) => (
            <Grid item key={`testimonial-${index}`}>
              <TestimonialCard
                variant={index % 2 === 0 ? 'right' : 'left'}
                data={testimonial}
              />
            </Grid>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  )
}

export default HomePage
