import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import visionImage from 'src/assets/images/visionValues.png'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { VISION_VALUES } from 'src/utils/constants'

const HeadingBorder = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '0.25rem',
  width: '7rem',
  maxWidth: '7.5rem',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '1rem',
  width: 'fit-content'
}))

const TopBorder = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  position: 'absolute',
  width: '9.29463rem',
  height: '12.03881rem',
  top: 0,
  left: 0,
  zIndex: 1
}))

const Image = styled('img')({
  position: 'relative',
  zIndex: 2
})

const BottomBorder = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  position: 'absolute',
  width: '4.89588rem',
  height: '5.5475rem',
  bottom: 0,
  right: 0,
  zIndex: 1
}))

const ListItem = styled('li')({
  padding: '1rem 0',
  color: theme.palette.text.secondary
})

const VisionValuesSection = () => {
  return (
    <Grid container columnSpacing={9} alignItems='center' rowGap={3}>
      <Grid item xs={12} md={4}>
        <Grid container direction='column' rowGap={4.5}>
          <Grid item>
            <Typography variant='h1'>{VISION_VALUES.vision.title}</Typography>
            <HeadingBorder />
          </Grid>
          <Grid item>
            <Typography color={theme.palette.text.secondary}>
              {VISION_VALUES.vision.content}
            </Typography>
            <Typography
              color={theme.palette.primary.main}
              fontWeight={1000}
              textTransform='uppercase'
            >
              {VISION_VALUES.vision.highlight}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} display={{ xs: 'none', md: 'block' }}>
        <ImageBox>
          <TopBorder />
          <Image src={visionImage} />
          <BottomBorder />
        </ImageBox>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container direction='column' rowGap={4.5}>
          <Grid item>
            <Typography variant='h1'>{VISION_VALUES.values.title}</Typography>
            <HeadingBorder />
          </Grid>
          <Grid item>
            <ul>
              {VISION_VALUES.values.content.map((value) => (
                <ListItem key={value}>
                  <Typography color={theme.palette.text.secondary}>
                    {value}
                  </Typography>
                </ListItem>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VisionValuesSection
