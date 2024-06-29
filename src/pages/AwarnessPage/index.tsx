import { Box, Chip, Grid, InputAdornment, Stack, styled } from '@mui/material'
import React, { useState } from 'react'
import searchBackground from 'src/assets/icons/search-box-background.svg'
import searchIcon from 'src/assets/icons/search.svg'
import Typography from 'src/components/atoms/Typography'
import { theme } from 'src/themes'
import Input from 'src/components/molecules/InputField'
import {
  BLOGS_HEADING,
  DONATION_VIDEO_CONTENT,
  DONATION_VIDEO_TITLE,
  FAQS_HEADING,
  INPUT_CHIP_DATA,
  SEARCH_PLACEHOLDER,
  YOU_NEEDNOT_BE_DOCTOR
} from 'src/utils/constants'
import landingPoster from 'src/assets/images/awarness-landing-poster.png'
import { Section } from '../HomePage'
import ArticleCard from 'src/components/molecules/ArticleCard'
import { IArticle, IChipInputData } from 'src/utils/types'
import FaqsGroup from 'src/components/organisms/Faqs'
import { ARTICLES } from '../BlogPage/blogs'
import awarenessVideo from 'src/assets/videos/why-Blood-Donation.mp4'

const SearchBackdrop = styled(Grid)(({ theme }) => ({
  background: `${theme.palette.primary.main}`,
  backgroundImage: `url(${searchBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain, cover',
  padding: '3.375rem 0 4.5625rem'
}))

const InputBox = styled(Box)({
  margin: '-2.25rem 8vw',
  background: 'transparent'
})

const SearchInput = styled(Input)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      boxShadow: '0px 4px 10px 1px rgba(165, 164, 164, 0.20)',
      border: 'none'
    },
    '&.Mui-focused .chips-focused': {
      display: 'flex'
    },
    '& fieldset': {
      border: 'none'
    },
    '.chip-group': {
      display: 'none'
    },
    outline: 'none',
    border: 'none',
    borderRadius: '0.5rem',
    background: theme.palette.structural.white,
    height: '4.5rem',
    boxShadow: '0px 4px 25px 1px rgba(165, 164, 164, 0.20)',
    padding: '0 3vw'
  },
  '& .MuiOutlinedInput-input': {
    paddingLeft: '1rem'
  }
}))

const HiddenBox = styled(Box)((props: { search?: boolean }) => ({
  display: props.search ? 'none' : 'block'
}))

const BlogsView = styled(Grid)(() => ({
  overflowY: 'auto',
  maxWidth: 'calc(492px * 3)',
  marginLeft: 'auto',
  marginRight: 'auto'
}))

const Video = styled('video')({
  borderRadius: '1rem'
})

const AwarenessPage = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [chips, setChips] = useState<IChipInputData>(INPUT_CHIP_DATA)
  const [blogs, setBlogs] = useState<IArticle[]>(ARTICLES)

  const handleSearch = (value: string) => {
    setSearchValue(value)
    if (chips.active !== 'Blogs') return
    setBlogs(
      ARTICLES.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const handleInputChips = (label: any, event?: any) => {
    console.log(event ? 'a' : 'b')
    let temp = label
    if (event) {
      temp = label === 'Blogs' ? 'Faqs' : 'Blogs'
    }
    setChips({ ...chips, active: temp })
  }

  return (
    <>
      <Box px={{ xs: 0, md: '8vw' }}>
        <SearchBackdrop
          container
          justifyContent='center'
          borderRadius={{ xs: 0, md: 2 }}
        >
          <Typography
            variant='h3'
            textAlign='center'
            color={theme.palette.structural.white}
          >
            {YOU_NEEDNOT_BE_DOCTOR}
          </Typography>
        </SearchBackdrop>
        <InputBox>
          <SearchInput
            fullWidth
            value={searchValue}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            placeholder={
              chips.active === undefined
                ? SEARCH_PLACEHOLDER
                : chips.active === 'Blogs'
                ? 'Search blogs, articles'
                : 'Search frequently asked questions'
            }
            onFocus={() => {
              if (chips.active === undefined) {
                setChips({ ...chips, active: 'Blogs' })
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <img src={searchIcon} height='24' width='24' />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <Stack
                    direction='row'
                    spacing={1}
                    className={
                      chips.active === undefined
                        ? 'chips-focused chip-group'
                        : 'chips-focused'
                    }
                  >
                    {chips.data.map((item) => (
                      <>
                        <Chip
                          label={item.label}
                          onClick={
                            chips.active === item.label
                              ? undefined
                              : () => {
                                  handleInputChips(item.label)
                                }
                          }
                          onDelete={
                            chips.active === item.label
                              ? (e) => {
                                  handleInputChips(item.label, e)
                                }
                              : undefined
                          }
                          color={
                            chips.active === item.label ? 'primary' : 'default'
                          }
                        />
                      </>
                    ))}
                  </Stack>
                </InputAdornment>
              )
            }}
          />
        </InputBox>
      </Box>
      <HiddenBox search={searchValue !== ''}>
        <Section>
          <Grid
            container
            direction={{ xs: 'column', md: 'row' }}
            justifyContent='center'
            alignItems='center'
            columnGap={6}
            rowGap={3}
          >
            <Grid item xs>
              <Video
                src={awarenessVideo}
                poster={landingPoster}
                controls
                width='100%'
              />
            </Grid>
            <Grid item xs>
              <Grid container direction='column' rowGap={{ xs: 3, md: 6 }}>
                <Grid item>
                  <Typography variant='h3'>{DONATION_VIDEO_TITLE}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    color={theme.palette.text.secondary}
                  >
                    {DONATION_VIDEO_CONTENT}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </HiddenBox>
      <HiddenBox
        search={searchValue === '' ? false : !(chips.active === 'Blogs')}
      >
        <Section id='blogs' py='0'>
          <HiddenBox search={searchValue !== ''}>
            <Typography variant='h3' textAlign='center'>
              {BLOGS_HEADING}
            </Typography>
          </HiddenBox>
          <BlogsView
            mt={3.75}
            container
            columnGap={5.5}
            flexWrap={{ xs: 'nowrap', sm: 'wrap' }}
            columns={{ xs: 1, sm: 2, lg: 3, xl: 4 }}
            justifyContent='center'
          >
            {blogs.map((item, index) => (
              <Grid item xs={1} key={`article-${index}`}>
                <ArticleCard data={item} />
              </Grid>
            ))}
          </BlogsView>
          {blogs.length === 0 && (
            <Typography variant='h3' textAlign='center'>
              No blogs found!
            </Typography>
          )}
        </Section>
      </HiddenBox>
      <HiddenBox
        search={searchValue === '' ? false : !(chips.active === 'Faqs')}
      >
        <Section id='faqs'>
          <Box mb={6}>
            <HiddenBox search={searchValue !== ''}>
              <Typography variant='h3'>{FAQS_HEADING}</Typography>
            </HiddenBox>
          </Box>
          <FaqsGroup searchValue={chips.active === 'Faqs' ? searchValue : ''} />
        </Section>
      </HiddenBox>
    </>
  )
}

export default AwarenessPage
