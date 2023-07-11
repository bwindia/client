import { Grid, styled } from '@mui/material'
import React, { useState } from 'react'
import Typography from 'src/components/atoms/Typography'
import Accordion from 'src/components/molecules/Accordion'
import theme from 'src/themes'
import { FAQS } from 'src/utils/constants'
import { IFaq, IFaqSection } from 'src/utils/types'

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

const FaqsGroup = () => {
  const [faqs, setFaqs] = useState<IFaq[]>(FAQS[2].data)
  const [topic, setTopic] = useState<string>(FAQS[2].topic)

  const handleFaqTopic = (item: IFaqSection) => {
    setTopic(item.topic)
    setFaqs(item.data)
  }

  return (
    <Grid container columnGap={15}>
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
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FaqsGroup
