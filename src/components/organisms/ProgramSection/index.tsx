import { Grid } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import ProgramCard from 'src/components/molecules/ProgramsCard'
import theme from 'src/themes'
import { OUR_PROGRAM, OUR_PROGRAM_HEADING, PROGRAMS } from 'src/utils/constants'

const ProgramSection = () => {
  return (
    <Grid container direction='column' py={3} px='8vw' rowGap={5}>
      <Grid item>
        <Grid container justifyContent='center'>
          <Typography variant='h3' textAlign='center'>
            {OUR_PROGRAM}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <Grid container rowGap={3}>
              <Grid item width='100%'>
                <Typography
                  variant='h4'
                  textAlign='center'
                  color={theme.palette.primary.main}
                >
                  {OUR_PROGRAM_HEADING.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  textAlign='center'
                  color={theme.palette.primary.main}
                >
                  {OUR_PROGRAM_HEADING.subContent}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item py={4}>
        <Grid container spacing={2} columns={{ xs: 1, md: 2, lg: 4 }}>
          {PROGRAMS.map((program) => (
            <Grid item key={program.id} xs={1}>
              <ProgramCard data={program} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProgramSection
