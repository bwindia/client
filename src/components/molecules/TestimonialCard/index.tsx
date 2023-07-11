import { Grid, styled } from '@mui/material'
import React from 'react'
import Avatar from 'src/components/atoms/Avatar'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { TestimonialType } from 'src/utils/types'

interface Props {
  data: TestimonialType
}

const MainCard = styled(Grid)({
  padding: '1.25rem',
  width: '333px',
  height: '397px',
  overflow: 'hidden',
  flexWrap: 'nowrap',
  background: `${theme.palette.structural.white}`,
  boxShadow: '0px 4px 75px 1px rgba(165, 164, 164, 0.2)',
  borderRadius: '0.5rem'
})

const Content = styled(Typography)({
  height: '100px',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const TestimonialCard = (props: Props) => {
  return (
    <>
      <MainCard container direction='column' alignItems='center' rowGap={2}>
        <Grid item>
          <Avatar
            src={props.data.image}
            variant='circular'
            width='10rem'
            height='10rem'
          />
        </Grid>
        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <Typography variant='h5'>{props.data.name}</Typography>
            </Grid>
            <Grid item>
              <Typography
                textOverflow='ellipsis'
                variant='h5'
                color={theme.palette.text.secondary}
              >
                ({props.data.role})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Content
            variant='body2'
            textAlign='center'
            color={theme.palette.text.secondary}
          >
            “{props.data.story}“
          </Content>
        </Grid>
      </MainCard>
    </>
  )
}

export default TestimonialCard
