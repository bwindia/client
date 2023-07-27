import { Grid, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from 'src/components/atoms/Avatar'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { IArticle } from 'src/utils/types'
import { BLOG_PATH } from 'src/utils/urls'

interface Props {
  data: IArticle
}

const PointerCard = styled(Grid)({
  cursor: 'pointer'
})

const Title = styled(Typography)({
  height: '36px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '22rem'
})

const ArticleContent = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '22rem'
})

const ArticleCard = (props: Props) => {
  const navigate = useNavigate()
  const { data } = props

  const handleArticleClick = () => {
    navigate(BLOG_PATH(data.id))
  }

  return (
    <PointerCard
      container
      direction='column'
      px={1.5}
      py={2}
      rowGap={2}
      width='24rem'
      onClick={handleArticleClick}
    >
      <Grid item>
        <Avatar
          src={data.image}
          variant='rounded'
          height='18.75rem'
          width='22.5rem'
        />
      </Grid>
      <Grid item>
        <Title variant='h4'>{data.title}</Title>
      </Grid>
      <Grid item>
        <ArticleContent color={theme.palette.text.secondary} variant='body2'>
          {data.article}
        </ArticleContent>
      </Grid>
      <Grid item>
        <Grid container columnGap={2}>
          <Grid item>
            <Avatar variant='circular' src={data.user.profilePicture} />
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography>{data.user.name}</Typography>
              </Grid>
              <Grid item>
                <Typography
                  color={theme.palette.text.secondary}
                  variant='body2'
                >
                  {data.createdAt}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PointerCard>
  )
}

export default ArticleCard
