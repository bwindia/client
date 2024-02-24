import { Grid, styled } from '@mui/material'
import React from 'react'
import Typography from 'src/components/atoms/Typography'
import theme from 'src/themes'

const Container = styled(Grid)({
  width: 'calc(100% - 2rem)',
  maxWidth: '48rem',
  margin: '2rem auto 4rem',
  textAlign: 'justify'
})

const SubHeading = styled(Typography)({
  ...theme.typography.h5,
  fontWeight: 700
})

const TermsConditionsPage = () => {
  return (
    <Container container direction='column' rowGap={7}>
      <Grid item id='terms-and-conditions'>
        <Grid container direction='column' rowGap={2}>
          <Grid item>
            <Typography variant='h3'>Terms and Conditions:</Typography>
          </Grid>
          <Grid item>
            <Typography>Blood Warriors Terms and Conditions</Typography>
            <Typography>Last Updated: July 19th, 2023</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Thank you for choosing to be part of the Blood Warriors community.
              These Terms and Conditions ({'"'}Terms{'"'}) govern your use of
              the Blood Warriors website, platform, and services. By accessing
              or using Blood Warriors, you agree to adhere to these Terms and
              Conditions.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Eligibility:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Blood Donors: Users must be at least 18 years old to register
              as blood donors on our platform. By signing up as a donor, you
              confirm that you meet the age requirement and are eligible to
              donate blood in accordance with applicable laws and guidelines.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Patients: Patients or their legal representatives can register
              with appropriate consent. Patients under the age of 18 must have
              consent from a parent or legal guardian.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Accurate Information: By signing up as donors or patients, you
              affirm that the information provided is accurate, truthful, and
              up-to-date.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>User Conduct:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Lawful Use: Users shall use the Blood Warriors platform solely
              for its intended purpose of facilitating blood donation and
              transfusions.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Respectful Communication: Users shall treat each other with
              respect and dignity during all interactions facilitated through
              Blood Warriors.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Compliance with Laws: Users shall comply with all applicable
              laws, regulations, and guidelines related to blood donation and
              transfusions.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Donor-Patient Interaction:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Respect for Privacy: Donors and patients shall respect each
              other{'\''}s privacy and personal boundaries during all
              communications and interactions.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Medical Safety: Users shall adhere to the guidelines and
              instructions provided on the Blood Warriors platform for safe and
              successful blood donation and transfusion procedures.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Intellectual Property:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Ownership: All content and materials on the Blood Warriors
              website, including text, graphics, images, logos, and software,
              are the property of Blood Warriors or its licensors and are
              protected by copyright and other intellectual property laws.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Limited License: Users are granted a limited, non-exclusive,
              and non-transferable license to access and use the Blood Warriors
              platform for personal and non-commercial purposes.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Limitation of Liability:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Disclaimer: Blood Warriors{'\''} platform is provided {'"'}as
              is,{'"'} and we do not make any warranties, express or implied,
              regarding its performance, reliability, or suitability for a
              particular purpose.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. User{'\''}s Responsibility: Users acknowledge that they use the
              platform at their own risk and are solely responsible for their
              interactions and experiences on the website.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Indemnification: Users agree to indemnify and hold Blood
              Warriors and its affiliates, officers, directors, employees, and
              agents harmless from any claims, losses, damages, liabilities, or
              expenses arising from their use of the platform.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Modifications and Termination:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Blood Warriors reserves the right to modify or terminate the
              website, its features, or these Terms and Conditions at any time
              without prior notice.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Users will be notified of any material changes to these Terms
              and Conditions.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Governing Law and Dispute Resolution:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. These Terms and Conditions shall be governed by and construed
              in accordance with the laws of India.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Any disputes arising out of or relating to these Terms and
              Conditions shall be subject to the exclusive jurisdiction of the
              courts of Hyderabad, Telangana, India.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              By using Blood Warriors{'\''} website and services, you acknowledge
              and agree to these Terms and Conditions. If you do not agree with
              any part of these terms, please refrain from using our platform.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TermsConditionsPage
