import {
  Grid,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  styled,
  toggleButtonGroupClasses
} from '@mui/material'
import React, { useState } from 'react'
import Typography from 'src/components/atoms/Typography'
import TeamCard from 'src/components/molecules/TeamCard'
import { OUR_TEAM } from 'src/utils/constants'
import { TEAM_MEMBERS } from './team'

const TeamGroup = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    overflow: 'auto',
    flexWrap: 'nowrap'
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(27rem, 27rem))',
    justifyContent: 'center'
  }
}))

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    borderRadius: '1rem'
  }
}))

const TeamSection = () => {
  const [roleTab, setRoleTab] = React.useState('core')
  const [allMembers, setAllMembers] = useState(TEAM_MEMBERS.slice(0, 6))
  const [page, setPage] = useState(1)
  const [paginatedMembers, setPaginatedMembers] = useState(allMembers)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setPaginatedMembers(
      allMembers.slice((value - 1) * 12, (value - 1) * 12 + 12)
    )
  }

  const handleRoleChange = (
    event: React.MouseEvent<HTMLElement>,
    role: string
  ) => {
    if (role !== null) {
      let teamGroup = TEAM_MEMBERS
      if (role === 'core') {
        teamGroup = TEAM_MEMBERS.slice(0, 6)
      } else {
        teamGroup = TEAM_MEMBERS.slice(6, TEAM_MEMBERS.length)
      }
      setAllMembers(teamGroup)
      setPaginatedMembers(teamGroup.slice(0, 12))
      setRoleTab(role)
    }
  }

  return (
    <Grid container direction='column' alignItems='center' rowGap={4}>
      <Grid item>
        <Typography variant='h3'>{OUR_TEAM}</Typography>
      </Grid>
      <Grid item>
        <StyledToggleButtonGroup
          color='primary'
          value={roleTab}
          exclusive
          onChange={handleRoleChange}
          aria-label='Platform'
        >
          <ToggleButton value='core'>Core team</ToggleButton>
          <ToggleButton value='volunteer'>Volunteers</ToggleButton>
        </StyledToggleButtonGroup>
      </Grid>
      <Grid item width='100%'>
        <TeamGroup
          container
          rowGap={3}
          columnSpacing={1.5}
          display={{ xs: 'flex', sm: 'none' }}
        >
          {allMembers.map((member) => (
            <Grid item key={member.name} xs>
              <TeamCard data={member} />
            </Grid>
          ))}
        </TeamGroup>
        <TeamGroup
          container
          justifyContent='center'
          rowSpacing={3}
          columnSpacing={1.5}
          display={{ xs: 'none', sm: 'grid' }}
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
