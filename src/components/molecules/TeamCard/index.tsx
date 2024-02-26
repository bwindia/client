import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { ITeamMember } from 'src/utils/types'

interface Props {
  data: ITeamMember
}

const Image = styled('img')({
  width: '390px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '0.75rem',
  [theme.breakpoints.down('sm')]: {
    width: '169px',
    height: '130px'
  }
})

const TeamCard = (props: Props) => {
  return (
    <Grid
      container
      direction='column'
      p={1}
      rowGap={1.5}
      alignItems='center'
      width='fit-content'
    >
      <Grid item>
        <Image src={props.data.image} />
      </Grid>
      <Grid item>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <Typography variant='h4' textAlign='center'>{props.data.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' textAlign='center' color={theme.palette.text.secondary}>
              {props.data.role}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TeamCard
