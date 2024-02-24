import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
  styled
} from '@mui/material'
import ExpandIcon from 'src/assets/icons/down-arrow.svg'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { IFaq } from 'src/utils/types'

interface Props {
  data: IFaq
}

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.structural.white,
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  '& .MuiAccordionSummary-content': {
    margin: 0
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`
}))

const Accordion = (props: Props) => {
  const { data } = props
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<img src={ExpandIcon} width='20' height='20' />}
      >
        <Typography variant='h5'>{data.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body1' color={theme.palette.text.secondary}>
          {data.answer}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  )
}

export default Accordion
