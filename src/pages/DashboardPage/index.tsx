import React from 'react'
import { Section } from '../HomePage'
import { styled } from '@mui/material'

const IFrame = styled('iframe')(({ theme }) => ({
  width: '100%',
  height: '50vw',
  [theme.breakpoints.down('sm')]: {
    height: '80vh'
  }
}))

const DashboardPage = () => {
  return (
    <Section>
      <IFrame
        title='Blood Warriors Progress Dashboard v1'
        src='https://app.powerbi.com/view?r=eyJrIjoiYmFiMzViZDctZjkwMS00ZjZlLTk3ZDItOTBmNjliZjhjNTIwIiwidCI6IjRkNjY1ZGI0LWJlNDctNDZlYi05ODZkLTdhNjI5MTA2NWZkYyJ9'
        frameBorder='0'
        allowFullScreen={true}
      ></IFrame>
    </Section>
  )
}

export default DashboardPage
