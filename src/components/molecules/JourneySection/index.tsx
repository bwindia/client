import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab'
import { Grid } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { JOURNEY, JOURNEY_TITLE } from 'src/utils/constants'

const JounreySection = () => {
  return (
    <Grid container direction='column' rowGap={9}>
      <Grid item>
        <Typography variant='h3'>{JOURNEY_TITLE}</Typography>
      </Grid>
      <Grid item>
        <Timeline position='alternate'>
          {JOURNEY.map((journey, index) => (
            <TimelineItem key={`journey-${index}`}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Grid container direction='column'>
                  <Grid item>
                    <Typography variant='h5'>{journey.date}</Typography>
                  </Grid>
                  {journey.description.length &&
                    journey.description.map((description) => (
                      <Grid item key={description}>
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          {description}
                        </Typography>
                      </Grid>
                    ))}
                </Grid>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </Grid>
  )
}

export default JounreySection
