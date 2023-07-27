import { Box, Grid, styled } from '@mui/material'
import MuiMarkdown from 'mui-markdown'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Avatar from 'src/components/atoms/Avatar'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { RELATED_BLOGS } from 'src/utils/constants'
import { IArticle } from 'src/utils/types'
import { AWARENESS_PAGE_ROUTE, BLOG_PATH } from 'src/utils/urls'
import { ARTICLES } from './blogs'

const Content = styled(Grid)({
  'div > *, *': {
    marginBottom: '1rem'
  },
  padding: '10px'
})

const RelatedBlogs = styled(Grid)({
  border: `1px solid ${theme.palette.text.secondary}`,
  borderRadius: '0.75rem',
  overflow: 'hidden'
})

const RelatedBlogsTitle = styled(Grid)({
  borderBottom: `1px solid ${theme.palette.text.secondary}`,
  background: theme.palette.primary.main,
  padding: '1.5rem 2rem'
})

const RelativeBox = styled(Box)({
  position: 'relative'
  // '&:hover .MuiBox-root': {
  // opacity: 1
  // }
})

const AbsoluteBox = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  borderRadius: '0.75rem',
  transition: '.5s ease'
})

const Image = styled('img')({
  opacity: 1,
  display: 'block',
  width: '100%',
  height: '15vw',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: '.5s ease',
  borderRadius: '0.75rem',
  backfaceVisibility: 'hidden'
})

const PointerGrid = styled(Grid)({
  cursor: 'pointer'
})

const BlogPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState<IArticle>(ARTICLES[0])
  const [content, setContent] = useState<string>('')
  const [relatedBlogs, setRelatedBlogs] = useState<IArticle[]>([
    ARTICLES[0],
    ARTICLES[0]
  ])

  useEffect(() => {
    const blogId = id
    const fetchBlog = async (article: IArticle) => {
      try {
        const filePath = require(`src/assets/blogs/${article.title}.md`).default
        const response = await fetch(filePath)
        const fetchedContent = await response.text()
        const fetchedBlog = article
        setContent(fetchedContent)
        setBlog(fetchedBlog)
      } catch (error) {
        navigate(AWARENESS_PAGE_ROUTE)
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    if (blogId) {
      const article = ARTICLES.filter((item) => item.id === blogId)
      if (article.length === 1) {
        void fetchBlog(article[0])
        const relatedArticles = ARTICLES.sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .filter((item) => item.id !== blogId)
        setRelatedBlogs(relatedArticles)
        scrollToTop()
      } else {
        navigate(AWARENESS_PAGE_ROUTE)
      }
    } else {
      navigate(AWARENESS_PAGE_ROUTE)
    }
  }, [id])

  const handleArticleClick = (id: string) => {
    navigate(BLOG_PATH(id))
  }

  return (
    <Box px='8vw' py='4vw'>
      <Grid container columnSpacing={7}>
        <Grid item xs={12} md={7}>
          <Grid container direction='column' rowGap={6}>
            <Grid item>
              <Typography variant='h1'>{blog.title}</Typography>
            </Grid>
            <Grid item>
              <Grid container columnGap={2} alignItems='center'>
                <Grid item>
                  <Avatar
                    variant='circular'
                    width='4.5rem'
                    height='4.5rem'
                    src={blog.user.profilePicture}
                  />
                </Grid>
                <Grid item>
                  <Grid container direction='column'>
                    <Grid item>
                      <Typography variant='h5'>{blog.user.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography color={theme.palette.text.secondary}>
                        {blog.createdAt}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Content item textAlign='justify' pr={2}>
              <MuiMarkdown>{content}</MuiMarkdown>
            </Content>
          </Grid>
        </Grid>
        <Grid item md={5} display={{ xs: 'none', md: 'block' }}>
          <RelatedBlogs container direction='column'>
            <RelatedBlogsTitle item>
              <Typography color={theme.palette.structural.white}>
                {RELATED_BLOGS}
              </Typography>
            </RelatedBlogsTitle>
            <Grid item px={4} py={3}>
              <Grid container direction='column' rowGap={5}>
                {relatedBlogs.map((item, index) => (
                  <Grid item key={`related-blog-${index}`}>
                    <RelativeBox>
                      <Image src={item.image} />
                      <AbsoluteBox>
                        <Grid
                          container
                          direction='column'
                          justifyContent='end'
                          height='100%'
                          rowGap={2}
                          p={2}
                        >
                          <Grid item>
                            <Typography
                              variant='h3'
                              color={theme.palette.structural.white}
                            >
                              {item.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Grid container justifyContent='space-between'>
                              <PointerGrid
                                item
                                onClick={() => {
                                  handleArticleClick(item.id)
                                }}
                              >
                                <Typography
                                  color={theme.palette.structural.white}
                                >
                                  {'Read more'}
                                </Typography>
                              </PointerGrid>
                              <Grid item>
                                <Typography
                                  color={theme.palette.structural.white}
                                >
                                  {item.createdAt}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </AbsoluteBox>
                    </RelativeBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </RelatedBlogs>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogPage
