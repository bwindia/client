import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import ProgramCard from 'src/components/molecules/ProgramsCard'
import theme from 'src/themes'
import { OUR_PROGRAM, OUR_PROGRAM_HEADING, PROGRAMS } from 'src/utils/constants'

const TitleGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '1.5rem'
}))
const ProgramSection = () => {
  return (
    <Grid container direction='column' py={3}>
      <Grid item>
        <Grid container>
          <TitleGrid item xs={8} md={4}>
            <Typography
              variant='h3'
              textAlign='center'
              color={theme.palette.structural.white}
            >
              {OUR_PROGRAM}
            </Typography>
          </TitleGrid>
        </Grid>
      </Grid>
      <Grid item px='8vw'>
        <Grid container justifyContent='end'>
          <Grid item xs={12} md={8}>
            <Grid container rowGap={3}>
              <Grid item width='100%'>
                <Typography
                  variant='h3'
                  textAlign='right'
                  color={theme.palette.primary.main}
                >
                  {OUR_PROGRAM_HEADING.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  textAlign='right'
                  color={theme.palette.primary.main}
                >
                  {OUR_PROGRAM_HEADING.subContent}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction='column'>
          {PROGRAMS.map((program) => (
            <Grid item key={program.id}>
              <ProgramCard data={program} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProgramSection
