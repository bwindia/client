import { Grid, styled } from '@mui/material'
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { IProgram } from 'src/utils/types'

interface Props {
  data: IProgram
}

const PrimaryBackgroundGrid = styled(Grid)((props: { height: number }) => ({
  background: theme.palette.primary.main,
  width: '15vw',
  height: `calc(${props.height}px)`
}))

const TransformGrid = styled(Grid)((props: { height: number }) => ({
  background: theme.palette.primary[300],
  width: '15vw',
  transform: 'skew(0deg,30deg)',
  marginTop: 'calc(15vw / 3.5)',
  height: `calc(${props.height}px)`
}))

const ContentGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  marginTop: 'calc(15vw / 1.75)',
  minHeight: '250px'
}))

const ProgramCard = (props: Props) => {
  const [height, setHeight] = useState(0)
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      console.log(ref)
      console.log(ref.current.clientHeight)
      console.log(ref.current.offsetHeight)
      setHeight(ref.current.clientHeight)
    }
    setTimeout(() => {
      handleWindowResize()
    }, 1000)

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Grid container>
      <PrimaryBackgroundGrid
        item
        height={height}
        container
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h1' color={theme.palette.structural.white}>
          {props.data.id}
        </Typography>
      </PrimaryBackgroundGrid>
      <TransformGrid item height={height}></TransformGrid>
      <ContentGrid item xs ref={ref}>
        <Grid
          container
          direction='column'
          rowGap={3}
          pl='4vw'
          pr='8vw'
          py={{ xs: 2, md: 4.5 }}
        >
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
        </Grid>
      </ContentGrid>
    </Grid>
  )
}

export default ProgramCard
