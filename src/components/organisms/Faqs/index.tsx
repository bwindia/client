import { Grid, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Typography from 'src/components/atoms/Typography'
import Accordion from 'src/components/molecules/Accordion'
import theme from 'src/themes'
import { IFaq, IFaqSection } from 'src/utils/types'
import { FAQS } from './faqs'

interface Props {
  searchValue: string
}

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

const FaqsGroup = (props: Props) => {
  const [faqsCount, setFaqCount] = useState(6)
  const [faqsSection, setFaqsSection] = useState<IFaqSection[]>(FAQS)
  const [faqs, setFaqs] = useState<IFaq[]>(FAQS[0].data.slice(0, faqsCount))
  // const [topic, setTopic] = useState<string>(FAQS[0].topic)
  const [activeTopic, setActiveTopic] = useState<string>(FAQS[0].topic)

  const handleFaqTopic = (item: IFaqSection) => {
    setFaqCount(6)
    setActiveTopic(item.topic)
    setFaqs(item.data.slice(0, faqsCount))
  }

  const handleSearch = () => {
    const tempFaqs: IFaqSection[] = []
    for (const topicItem of FAQS) {
      const filteredTopicFaqs = topicItem.data.filter((item: any) =>
        item.question.toLowerCase().includes(props.searchValue.toLowerCase())
      )
      console.log(filteredTopicFaqs)
      if (filteredTopicFaqs.length) {
        tempFaqs.push({
          topic: topicItem.topic,
          data: filteredTopicFaqs
        })
      }
    }
    setFaqsSection(tempFaqs)
    if (tempFaqs.length) {
      setFaqs(tempFaqs[0].data.slice(0, faqsCount))
      setActiveTopic(tempFaqs[0].topic)
    } else {
      setFaqs([])
      setActiveTopic('')
    }
  }

  const handleSeeMore = () => {
    const count = faqsCount + 3
    if (count > faqsSection[0].data.length) {
      return
    }
    setFaqCount(count)
    setFaqs(faqsSection[0].data.slice(0, count))
  }

  useEffect(() => {
    handleSearch()
  }, [props.searchValue])

  return (
    <>
      <Grid container columnGap={15} rowGap={4}>
        {faqsSection.length !== 0 && (
          <>
            <Grid item>
              <TopicGroup container direction='column'>
                {faqsSection.map((item, index) => (
                  <TopicCell
                    item
                    active={item.topic === activeTopic}
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
          </>
        )}
      </Grid>
      {faqsSection.length === 0 && (
        <Typography variant='h3' textAlign='center'>
          No FAQs found!
        </Typography>
      )}
    </>
  )
}

export default FaqsGroup
