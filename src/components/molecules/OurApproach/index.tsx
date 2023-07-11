import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { OUR_APPROACH } from 'src/utils/constants'

const ApproachCard = styled(Grid)(({ theme }) => ({
  borderRadius: '1rem',
  border: `1px dashed ${theme.palette.text.secondary}`,
  height: '100%'
}))

const ApproachValueCard = styled(Grid)({
  padding: '1.5rem 3rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 4px 75px 1px rgba(165, 164, 164, 0.20)',
  width: 'fit-content'
})

const Pointer = styled(Box)((props: { fill: string }) => ({
  width: '2rem',
  height: '2rem',
  background: props.fill,
  borderRadius: '50%'
}))
const OurApproach = () => {
  return (
    <Grid container direction='column' rowGap={4.5}>
      <Grid item>
        <Typography variant='h3' textAlign='center'>
          {OUR_APPROACH.heading}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container columnSpacing={2} rowGap={2} columns={{ xs: 1, md: 2 }}>
          {OUR_APPROACH.content.map((approach) => (
            <Grid item key={`approach-${approach.title}`} xs={1}>
              <ApproachCard container direction='column' p={4} rowGap={5}>
                <Grid item>
                  <Typography
                    variant='h3'
                    color={theme.palette.text.secondary}
                    textAlign='center'
                  >
                    {approach.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction='column' rowGap={6}>
                    {approach.values.map((item) => (
                      <ApproachValueCard item key={item.value}>
                        <Grid container columnSpacing={3} flexWrap='nowrap'>
                          <Grid item>
                            <Pointer fill={item.color} />
                          </Grid>
                          <Grid item>
                            <Typography
                              variant='h5'
                              color={theme.palette.text.secondary}
                            >
                              {item.value}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ApproachValueCard>
                    ))}
                  </Grid>
                </Grid>
              </ApproachCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OurApproach
