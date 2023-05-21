import { Divider, Grid, styled } from '@mui/material'
import React from 'react'
import Avatar from 'src/components/atoms/Avatar'
import Button from 'src/components/atoms/Button'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'
import { DONATE_BLOOD, PATIENT_REQUEST_LABELS } from 'src/utils/constants'
import { calculateTimeDifference } from 'src/utils/functions'
import { DonationRequestDetails } from 'src/utils/types'

interface Props {
  data: DonationRequestDetails
}

const RequestCard = styled(Grid)({
  borderRadius: '1rem',
  padding: '1rem 0.375rem',
  boxShadow: `0px 4px 75px 1px ${theme.palette.structural.shadow}`,
  height: '100%'
})

const DonationRequestCard = (props: Props) => {
  const { data } = props
  return (
    <RequestCard container direction='column'>
      <Grid item px={1.5}>
        <Grid container columnGap={2} alignItems='center'>
          <Grid item>
            <Avatar src={data.profile.image}></Avatar>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography>{data.profile.userName}</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  color={theme.palette.text.secondary}
                >
                  {calculateTimeDifference(data.profile.timeStamp)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item my={1.5}>
        <Divider variant='fullWidth' />
      </Grid>
      <Grid item px={3}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          rowGap={2}
          height='100%'
        >
          <Grid item width='100%'>
            <Grid container direction='column' rowGap={1}>
              {Object.keys(data.patient).map(
                (
                  key:
                    | 'patientName'
                    | 'bloodGroup'
                    | 'quantity'
                    | 'address'
                    | 'contact'
                    | 'extraDetails'
                ) => (
                  <Grid item key={`${key}-label`} width='100%'>
                    <Grid container>
                      <Grid item xs>
                        <Typography
                          color={theme.palette.primary.main}
                          fontWeight={600}
                          variant='body2'
                        >
                          {PATIENT_REQUEST_LABELS[key]}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant='body2'>
                          {data.patient[key]}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              outlineColor={theme.palette.primary.main}
            >
              {DONATE_BLOOD}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </RequestCard>
  )
}

export default DonationRequestCard
