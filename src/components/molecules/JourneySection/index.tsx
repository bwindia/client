import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
  timelineContentClasses
} from '@mui/lab'
import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { JOURNEY, JOURNEY_TITLE } from 'src/utils/constants'

const JourneyImage = styled('img')(() => ({
  maxWidth: '18rem',
  filter: 'grayscale(100%)',
  '&:hover': {
    filter: 'none'
  }
}))

const JourneyTimeline = styled(Timeline)(({ theme }) => ({
  [`& .${timelineItemClasses.root}:nth-of-type(even)`]: {
    flexDirection: 'row-reverse',
    [`& .${timelineContentClasses.root}`]: {
      textAlign: 'right'
    }
  },
  [theme.breakpoints.down('sm')]: {
    [`& .${timelineItemClasses.root}:nth-of-type(even)`]: {
      flexDirection: 'row',
      [`& .${timelineContentClasses.root}`]: {
        textAlign: 'left'
      }
    },
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0
    }
  }
}))

const JounreySection = () => {
  return (
    <Grid container direction='column' rowGap={{ xs: 2, md: 4 }}>
      <Grid item>
        <Typography variant='h3' textAlign={{ xs: 'start', sm: 'center' }}>
          {JOURNEY_TITLE}
        </Typography>
      </Grid>
      <Grid item>
        <JourneyTimeline>
          {JOURNEY.map((journey, index) => (
            <TimelineItem key={`journey-${index}`}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Grid container direction='column'>
                  <Grid item mb={0.5}>
                    <JourneyImage src={journey.image} />
                  </Grid>
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
        </JourneyTimeline>
      </Grid>
    </Grid>
  )
}

export default JounreySection
