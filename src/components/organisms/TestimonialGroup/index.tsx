import { Box, Grid, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TestimonialCard from 'src/components/molecules/TestimonialCard'
import { TESTIMONIALS } from 'src/utils/constants'
import leftArrow from 'src/assets/icons/left-arrow.svg'
import rightArrow from 'src/assets/icons/right-arrow.svg'
import { TestimonialType } from 'src/utils/types'
import theme from 'src/themes'

interface Props {
  data?: TestimonialType[]
}

const RelativeBox = styled(Box)(
  (props: { items: number; width?: number | string }) => ({
    overflow: 'hidden',
    width: 'calc(100vw - 16vw - 90px)',
    maxWidth: `calc((333px + 44px) * ${props.items} - 44px)`,
    padding: '22px'
  })
)

const AnimatedBox = styled(Box)((props: { positionValue: number }) => ({
  transition: '1s',
  position: 'relative',
  right: `${props.positionValue}px`
}))

const TestimonialGroup = (props: Props) => {
  const { data = TESTIMONIALS } = props
  const [items, setItems] = useState(3)
  const [position, setPosition] = useState(0)

  const handleMove = (movement: 'left' | 'right') => {
    if (movement === 'left') {
      if (position === 0) {
        return
      }
      setPosition(position - 377)
    } else {
      if (position >= 377 * (data.length - items)) {
        setPosition(0)
        return
      }
      setPosition(position + 377)
    }
  }

  const handleItemsOnResize = (width: number) => {
    if (width < theme.breakpoints.values.md) {
      setItems(1)
    } else if (width < theme.breakpoints.values.lg) {
      setItems(2)
    } else {
      setItems(3)
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      handleItemsOnResize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
    handleItemsOnResize(window.innerWidth)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <>
      <Grid container flexWrap='nowrap' alignItems='center'>
        <Grid item xs zIndex={3} textAlign='center'>
          <img
            src={leftArrow}
            onClick={() => {
              handleMove('left')
            }}
          />
        </Grid>
        <Grid item xs='auto' zIndex={2}>
          <RelativeBox items={items}>
            <AnimatedBox positionValue={position}>
              <Grid container direction='row' flexWrap='nowrap' columnGap={5.5}>
                {data.map((testimonial, index) => (
                  <Grid item key={`testimonial-${index}`}>
                    <TestimonialCard data={testimonial} />
                  </Grid>
                ))}
              </Grid>
            </AnimatedBox>
          </RelativeBox>
        </Grid>
        <Grid item xs zIndex={3} textAlign='center'>
          <img
            src={rightArrow}
            onClick={() => {
              handleMove('right')
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default TestimonialGroup
