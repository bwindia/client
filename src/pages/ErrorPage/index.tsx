import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import SEO from 'src/components/templates/SEO'
import { Section } from 'src/pages/HomePage'
import theme from 'src/themes'
import { HOME_PAGE_ROUTE } from 'src/utils/urls'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <SEO title='404 Page not found | Blood Warriors' />
      <Section>
        <Grid
          rowGap={5}
          paddingX={'2vw'}
          paddingY={'20vh'}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Grid item>
            <Typography variant='h1'>404</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3'>UH OH! You&apos;re lost.</Typography>
            <Typography variant='h5'>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              size='large'
              outlineColor={theme.palette.primary.main}
              onClick={() => {
                navigate(HOME_PAGE_ROUTE)
              }}
            >
              HOME
            </Button>
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default ErrorPage
