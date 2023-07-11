import { Grid } from '@mui/material'
import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Avatar from 'src/components/atoms/Avatar'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { IArticle } from 'src/utils/types'
import { BLOG_PAGE_ROUTE } from 'src/utils/urls'

interface Props {
  data: IArticle
}

const ArticleCard = (props: Props) => {
  const navigate = useNavigate()
  const { data } = props

  const handleArticleClick = () => {
    const params = { id: data.id }
    navigate({
      pathname: BLOG_PAGE_ROUTE,
      search: createSearchParams(params).toString()
    })
  }

  return (
    <Grid
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
        <Typography variant='h4'>{data.title.substring(0, 47)}</Typography>
      </Grid>
      <Grid item>
        <Typography color={theme.palette.text.secondary} variant='body2'>
          {data.article.substring(0, 175)}...
        </Typography>
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
    </Grid>
  )
}

export default ArticleCard
