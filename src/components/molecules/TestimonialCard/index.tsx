import { Grid } from '@mui/material'
import React from 'react'
import Avatar from 'src/components/atoms/Avatar'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { READ_FULL_STORY } from 'src/utils/constants'
import { TestimonialType } from 'src/utils/types'

interface Props {
  data: TestimonialType
  variant?: 'left' | 'right'
}

const TestimonialCard = ({ variant = 'right', ...props }: Props) => {
  return (
    <Grid
      container
      direction={variant === 'left' ? 'row' : 'row-reverse'}
      alignItems='center'
      columnGap={13}
    >
      <Grid item xs='auto'>
        <Avatar
          src={props.data.image}
          variant='rounded'
          width='25rem'
          height='25rem'
        />
      </Grid>
      <Grid item xs>
        <Grid container direction='column' rowGap={4.5}>
          <Grid item>
            <Typography variant='h3'>{props.data.title}</Typography>
          </Grid>
          <Grid item>
            <Typography color={theme.palette.text.secondary}>
              {props.data.story}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              size='large'
              outlineColor={theme.palette.primary.main}
            >
              {READ_FULL_STORY}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TestimonialCard
