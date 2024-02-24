import { Grid, styled } from '@mui/material'
import React, { useState } from 'react'
import Typography from 'src/components/atoms/Typography'
import Accordion from 'src/components/molecules/Accordion'
import theme from 'src/themes'
import { IFaq, IFaqSection } from 'src/utils/types'
import { FAQS } from './faqs'

const TopicGroup = styled(Grid)({
  boxShadow: '0px 4px 75px 1px rgba(165, 164, 164, 0.20)'
})

const TopicCell = styled(Grid)((props: { active?: boolean }) => ({
  padding: '1.25rem 1.5rem',
  cursor: 'pointer',
  borderRadius: 8,
  background: props.active
    ? theme.palette.primary.main
    : theme.palette.structural.white,
  color: props.active
    ? theme.palette.structural.white
    : theme.palette.text.primary
}))

const PointerText = styled(Typography)({
  cursor: 'pointer',
  textDecoration: 'underline',
  color: theme.palette.primary.main,
  textAlign: 'center'
})

const FaqsGroup = () => {
  const [faqsCount, setFaqCount] = useState(6)
  const [faqs, setFaqs] = useState<IFaq[]>(FAQS[0].data.slice(0, faqsCount))
  const [topic, setTopic] = useState<string>(FAQS[0].topic)

  const handleFaqTopic = (item: IFaqSection) => {
    setFaqCount(6)
    setTopic(item.topic)
    setFaqs(item.data.slice(0, faqsCount))
  }

  const handleSeeMore = () => {
    const count = faqsCount + 3
    if (count > FAQS[0].data.length) {
      return
    }
    setFaqCount(count)
    setFaqs(FAQS[0].data.slice(0, count))
  }

  return (
    <Grid container columnGap={15} rowGap={4}>
      <Grid item>
        <TopicGroup container direction='column'>
          {FAQS.map((item, index) => (
            <TopicCell
              item
              active={item.topic === topic}
              key={`faq-topic-${index}`}
              onClick={() => {
                handleFaqTopic(item)
              }}
            >
              <Typography variant='h5'>{item.topic}</Typography>
            </TopicCell>
          ))}
        </TopicGroup>
      </Grid>
      <Grid item xs>
        <Grid container direction='column' rowGap={1.5}>
          {faqs.map((item, index) => (
            <Grid item key={`faq-${index}`}>
              <Accordion data={item}></Accordion>
            </Grid>
          ))}
          <Grid item mt={2}>
            <PointerText
              onClick={() => {
                handleSeeMore()
              }}
            >
              See more
            </PointerText>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FaqsGroup
