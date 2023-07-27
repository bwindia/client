import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { IProgram } from 'src/utils/types'

interface Props {
  data: IProgram
}

const ContentGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '3rem 1rem 1rem',
  minHeight: '21rem'
}))

const ProgramCard = (props: Props) => {
  return (
    <ContentGrid container direction='column' rowGap={3}>
      <Grid item>
        <Typography variant='h5' color={theme.palette.structural.white}>
          {props.data.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color={theme.palette.structural.white}>
          {props.data.content}
        </Typography>
      </Grid>
    </ContentGrid>
  )
}

export default ProgramCard
