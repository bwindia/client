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

const PolicyPage = () => {
  return (
    <Container container direction='column' rowGap={7}>
      <Grid item id='privacy-policy'>
        <Grid container direction='column' rowGap={2}>
          <Grid item>
            <Typography variant='h3'>Privacy Policy</Typography>
          </Grid>
          <Grid item>
            <Typography>Blood Warriors Privacy Policy</Typography>
            <Typography>Last Updated: July 19th, 2023</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Thank you for choosing to be part of the Blood Warriors community.
              This Privacy Policy explains how Blood Warriors ({'"'}we,{'" '}
              {'"'}our,{'" '}or
              {' "'}us{'"'}) collect, use, share, and protect your personal
              information. By accessing our website, creating an account, or
              using our services, you agree to the terms outlined in this
              Privacy Policy.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Information We Collect:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Personal Information: When you sign up as a donor or patient on
              the Blood Warriors platform, we collect your personal information,
              including but not limited to your name, contact information, email
              address, blood type, health information and location.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Medical and Health Information: If you donate blood or receive
              transfusions through our platform, we may collect and store
              relevant medical and health information to ensure safe and
              effective coordination.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Device Information: We may automatically collect certain
              information about your device, including your IP address, browser
              type, operating system, and other technical details to improve our
              website and services.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              d. Cookies and Similar Technologies: Blood Warriors may use
              cookies and similar technologies to track user interactions with
              our website, understand user preferences, and deliver personalized
              experiences.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>How We Use Your Information:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Donor-Patient Matching: We use the information provided to
              facilitate successful matches between donors and patients,
              ensuring timely access to blood transfusions.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Communication: Blood Warriors may use your contact information
              to send you important updates, appointment reminders, and
              notifications related to your blood donation and transfusion
              activities.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Service Improvement: We analyze user data to improve our
              platform
              {'\''}s functionality, enhance user experience, and identify areas
              for optimization.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Data Sharing and Disclosure:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Donor-Patient Interaction: To facilitate donor-patient
              interactions, we may share your information, including your name,
              blood type, and location, with potential donors or patients in
              need of blood.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Partners and Service Providers: Blood Warriors may share your
              data with trusted partners and service providers who assist us in
              delivering our services, such as blood banks, hospitals, clinics,
              cloud hosting, or data analytics.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Legal Compliance: We may disclose your information if required
              by law, regulation, or legal process, or to protect the rights,
              safety, and property of Blood Warriors, its users, or the public.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Data Security:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Blood Warriors takes reasonable measures to safeguard your data
              from unauthorized access, use, or disclosure. However, no data
              transmission over the internet can be entirely secure. Please be
              aware of this risk when providing information through our
              platform.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. User Account Security: You are responsible for maintaining the
              confidentiality of your account credentials, and we recommend
              using strong and unique passwords and upto date anti virus program
              on your devices.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Your Choices and Rights:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Account Management: You can update or delete your account
              information at any time by logging into your Blood Warriors
              account.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. Communication Preferences: You can choose to receive or opt-out
              of specific communications from us by managing your email
              preferences.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              c. Access and Correction: If you believe any information we hold
              about you is inaccurate or incomplete, please contact us, and we
              will endeavor to rectify it promptly.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Third-Party Services:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Blood Warriors may include links to third-party websites or
              services that are not operated by us. Please note that this
              Privacy Policy applies only to our website and services. We
              encourage you to review the privacy policies of any third-party
              sites or services you visit.
            </Typography>
          </Grid>
          <Grid item>
            <SubHeading>Changes to the Privacy Policy:</SubHeading>
          </Grid>
          <Grid item>
            <Typography>
              a. Blood Warriors may update this Privacy Policy from time to time
              to reflect changes in our practices or for other operational,
              legal, or regulatory reasons.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              b. We will notify you of any material changes to this Privacy
              Policy by prominently posting a notice on our website or sending
              an email to registered users.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              By using Blood Warriors{'\''} website and services, you acknowledge
              and agree to this Privacy Policy. If you do not agree with any
              part of this policy, please refrain from using our platform.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
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
              These Terms and Conditions ({'"'}Terms{'"'}) govern your use of the Blood
              Warriors website, platform, and services. By accessing or using
              Blood Warriors, you agree to adhere to these Terms and Conditions.
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
              other{'\''}s privacy and personal boundaries during all communications
              and interactions.
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
              a. Disclaimer: Blood Warriors{'\''} platform is provided {'"'}as is,{'"'} and
              we do not make any warranties, express or implied, regarding its
              performance, reliability, or suitability for a particular purpose.
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
              By using Blood Warriors{'\''} website and services, you acknowledge and
              agree to these Terms and Conditions. If you do not agree with any
              part of these terms, please refrain from using our platform.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PolicyPage
