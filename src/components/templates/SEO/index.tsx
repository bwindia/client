import React from 'react'
import { Helmet } from 'react-helmet'
import logo from 'src/assets/logos/BW Title Logo.png'

interface Props {
  title: string
  description?: string
  icon?: string
  keywords?: string
}

const SEO = ({
  description = 'Blood Warriors is revolutionizing the care and prevention of genetic disorders like Thalassemia. Join our mission to make a Thalassemia-free India.',
  icon = logo,
  keywords = 'ngos',
  ...props
}: Props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <link rel='icon' type='image/png' href={icon} sizes='720x720' />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content={`Blood Warriors, BW, NGO, Non-Profit, Blood Donation, Thalassemia, India, ${keywords}`}
      />
    </Helmet>
  )
}

export default SEO
