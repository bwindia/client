import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import TeamCard from 'src/components/molecules/TeamCard'
import { OUR_TEAM, TEAM_MEMBERS } from 'src/utils/constants'

const TeamGroup = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    overflow: 'auto',
    flexWrap: 'nowrap'
  }
}))

const TeamSection = () => {
  return (
    <Grid container direction='column' rowGap={4}>
      <Grid item>
        <Typography variant='h3'>{OUR_TEAM}</Typography>
      </Grid>
      <Grid item width='100%'>
        <TeamGroup
          container
          rowGap={3}
          columnSpacing={1.5}
          columns={{ sm: 1, md: 2, xl: 3 }}
        >
          {TEAM_MEMBERS.map((member) => (
            <Grid item key={member.name} xs={1}>
              <TeamCard data={member} />
            </Grid>
          ))}
        </TeamGroup>
      </Grid>
    </Grid>
  )
}

export default TeamSection
