import { Grid, Pagination, styled } from '@mui/material'
import React, { useState } from 'react'
import Typography from 'src/components/atoms/Typography'
import TeamCard from 'src/components/molecules/TeamCard'
import theme from 'src/themes'
import { OUR_TEAM } from 'src/utils/constants'
import { TEAM_MEMBERS } from './team'

const TeamGroup = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    overflow: 'auto',
    flexWrap: 'nowrap'
  }
}))

const TeamSection = () => {
  const [allMembers] = useState(TEAM_MEMBERS)
  const [page, setPage] = useState(1)
  const [paginatedMembers, setPaginatedMembers] = useState(
    TEAM_MEMBERS.slice(0, 12)
  )
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(getItemsByScreenWidth())
    console.log(allMembers.length)
    setPage(value)
    setPaginatedMembers(
      allMembers.slice((value - 1) * 12, (value - 1) * 12 + 12)
    )
  }

  const getItemsByScreenWidth = () => {
    console.log('width', screen.width)
    if (window.screenX > theme.breakpoints.values.xl) {
      return 3
    } else if (
      window.screenX < theme.breakpoints.values.xl &&
      window.screenX > theme.breakpoints.values.md
    ) {
      return 2
    }
    return 1
  }

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
          display={{ xs: 'flex', sm: 'none' }}
          // columns={{ sm: 1, md: 2, xl: 3 }}
        >
          {allMembers.map((member) => (
            <Grid item key={member.name} xs>
              <TeamCard data={member} />
            </Grid>
          ))}
        </TeamGroup>
        <TeamGroup
          container
          rowGap={3}
          columnSpacing={1.5}
          display={{ xs: 'none', sm: 'flex' }}
          // columns={{ sm: 1, md: 2, xl: 3 }}
        >
          {paginatedMembers.map((member) => (
            <Grid item key={member.name} xs>
              <TeamCard data={member} />
            </Grid>
          ))}
        </TeamGroup>
      </Grid>
      <Grid
        item
        container
        justifyContent='center'
        display={{ xs: 'none', sm: 'flex' }}
      >
        <Pagination
          count={Math.ceil(allMembers.length / 12)}
          page={page}
          onChange={handleChange}
          color='primary'
        />
      </Grid>
    </Grid>
  )
}

export default TeamSection
