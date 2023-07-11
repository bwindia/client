import { Box, Grid, styled } from '@mui/material'
import MuiMarkdown from 'mui-markdown'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Avatar from 'src/components/atoms/Avatar'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { RELATED_BLOGS } from 'src/utils/constants'
import { IArticle } from 'src/utils/types'
import { AWARENESS_PAGE_ROUTE } from 'src/utils/urls'
import { ARTICLES } from './blogs'

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
  position: 'relative',
  '&:hover .MuiBox-root': {
    opacity: 1
  }
})

const AbsoluteBox = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0,
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

const BlogPage = () => {
  const [parms] = useSearchParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState<IArticle>(ARTICLES[0])
  const [relatedBlogs, setRelatedBlogs] = useState<IArticle[]>([
    ARTICLES[0],
    ARTICLES[0]
  ])

  useEffect(() => {
    const blogId = parms.get('id')
    if (blogId) {
      const article = ARTICLES.filter((item) => item.id === blogId)
      if (article.length === 1) {
        setBlog(article[0])
        const relatedArticles = ARTICLES.sort(() => Math.random() - 0.5)
          .slice(0, 2)
          .filter((item) => item.id !== blogId)
        setRelatedBlogs(relatedArticles)
      } else {
        navigate(AWARENESS_PAGE_ROUTE)
      }
    } else {
      navigate(AWARENESS_PAGE_ROUTE)
    }

    const fetchBlog = async (fileName: string) => {
      try {
        const filePath = require(`src/assets/blogs/${fileName}.md`).default
        const response = await fetch(filePath)
        const content = await response.text()
        blog.article = content
        setBlog({ ...blog })
        console.log(content)
      } catch (error) {
        console.error('Error fetching file:', error)
      }
    }

    void fetchBlog(blog.title)
  }, [])

  return (
    <Box px='8vw' py='4vw'>
      <Grid container columnSpacing={7}>
        <Grid item xs={12} md={7}>
          <Grid container direction='column' rowGap={6}>
            <Grid item>
              <Typography variant='h1'>{blog?.title}</Typography>
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
            <Grid item textAlign='justify' pr={2}>
              <MuiMarkdown>
                {blog.article}
                {/* {`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how alSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how alvSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. Jella Saikiran"`} */}
              </MuiMarkdown>
            </Grid>
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
                              <Grid item>
                                <Typography
                                  color={theme.palette.structural.white}
                                >
                                  {'Read more'}
                                </Typography>
                              </Grid>
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
