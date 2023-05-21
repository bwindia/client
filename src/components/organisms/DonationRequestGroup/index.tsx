import { Grid, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import DonationRequestCard from 'src/components/molecules/DonationRequestCard'
import { getDonationRequests } from 'src/services/api'
import theme from 'src/themes'
import { BLOOD_GROUPS, DONATION_REQUEST_HEADING } from 'src/utils/constants'
import { DonationRequestDetails } from 'src/utils/types'

interface Props {}

const Tab = styled(Button)({
  padding: '0.75rem 2.25rem'
})

const DonationRequestsGroup = (props: Props) => {
  const [donationDetails, setDonationDetails] = useState<
    DonationRequestDetails[]
  >([])
  const [filteredDonationDetails, setFilteredDonationDetails] = useState<
    DonationRequestDetails[]
  >([])
  const [activeTab, setActiveTab] = useState<number>(0)

  useEffect(() => {
    fetchDonations()
  }, [])

  const fetchDonations = () => {
    getDonationRequests()
      .then((response) => {
        setDonationDetails(response.data)
        setFilteredDonationDetails(
          response.data.filter(
            (item) => item.patient.bloodGroup === BLOOD_GROUPS[activeTab]
          )
        )
      })
      .catch((err) => {
        console.warn('failed to get donation requests', err)
      })
  }

  const filterBloodGroup = (value: string, index: number) => {
    setFilteredDonationDetails(
      donationDetails.filter((item) => item.patient.bloodGroup === value)
    )
    setActiveTab(index)
  }

  return (
    <Grid container direction='column' rowGap={6}>
      <Grid item>
        <Grid container direction='column' rowGap={4.5}>
          <Grid item>
            <Typography variant='h3' color={theme.palette.primary.main}>
              {DONATION_REQUEST_HEADING}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container columnGap={2}>
              {BLOOD_GROUPS.map((bloodGroup, index) => (
                <Grid item key={`blood-group-${bloodGroup}`}>
                  <Tab
                    variant={index === activeTab ? 'contained' : 'outlined'}
                    outlineColor={theme.palette.primary.main}
                    onClick={() => {
                      filterBloodGroup(bloodGroup, index)
                    }}
                  >
                    {bloodGroup}
                  </Tab>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={7.5}>
          {filteredDonationDetails.length ? (
            <>
              {filteredDonationDetails.map((item, index) => (
                <Grid item xs={4} key={`donation-request-${index}`}>
                  <DonationRequestCard data={item} />
                </Grid>
              ))}
            </>
          ) : (
            <Grid
              item
              height='20rem'
              width='100%'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Typography variant='h4'>
                No donations for this blood group
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DonationRequestsGroup
