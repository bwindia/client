import React from 'react'
import { Section } from '../HomePage'
import { styled } from '@mui/material'
import SEO from 'src/components/templates/SEO'

export const IFrame = styled('iframe')(({ theme }) => ({
  width: '100%',
  height: '50vw',
  [theme.breakpoints.down('sm')]: {
    height: '80vh'
  }
}))

const DashboardPage = () => {
  return (
    <>
      <SEO title='Dashboard | Blood Warriors' />
      <Section>
        <IFrame
          title='Blood Warriors Progress Dashboard v1'
          src='https://app.powerbi.com/view?r=eyJrIjoiZTE5Mjg0YzktNTlmMS00ODYzLWEyNDYtMDZmZmFkMjYwOGUzIiwidCI6IjMwNWI1NDdiLWVmNjgtNGUwNS04YzU4LTlhOThmMmMzYWRiOSJ9'
          frameBorder='0'
          allowFullScreen={true}
        ></IFrame>
      </Section>
    </>
  )
}

export default DashboardPage
