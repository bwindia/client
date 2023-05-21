/* eslint-disable quotes */
import {
  DonationRequestDetails,
  DonationReuqestPatientDetails,
  Heading,
  TestimonialType
} from './types'
import testimonial1 from 'src/assets/avatars/testimonial1.png'
import testimonial2 from 'src/assets/avatars/testimonial2.png'
import testimonial3 from 'src/assets/avatars/testimonial3.png'
import person1 from 'src/assets/avatars/person3.png'
// import person2 from 'src/assets/avatars/person2.png'
// import person3 from 'src/assets/avatars/person1.png'

// Button Labels
export const SIGN_IN = 'Sign In'
export const GET_BLOOD_NOW = 'Get Blood Now'
export const DONATE_BLOOD = 'Donate Blood'
export const REGISTER_NOW = 'Register Now'
export const READ_FULL_STORY = 'Read full Story'

// Navbar Labels
export const HOME = 'Home'
export const ABOUT_US = 'About Us'
export const PATIENT = 'Patient'
export const DONOR = 'Donor'
export const VOLUNTEER = 'Volunteer'

// Footer Labels
export const CONTACT_OUR_TEAM = 'Contact to our team'
export const FOOTER_LABELS = [
  ['Services', 'Email Marketing', 'Campaigns', 'Branding', 'Offline'],
  ['About', 'Our Stories', 'Benefits', 'Team', 'Carrer'],
  ['Help', 'FAQs', 'Newsletter']
]

// Home page
export const HERO_SECTION: Heading = {
  title: 'Save Life, Donate Blood',
  subContent:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}
export const TESTIMONIAL_SECTION_TITLE =
  'Transforming Lives: Real Stories of Hope and Progress'
export const TESTIMONIALS: TestimonialType[] = [
  {
    title: 'Aisha Finds Lifeline on Blood Warriors',
    story:
      'Aisha was diagnosed with thalassemia at a young age and required regular blood transfusions to manage her condition. Her family often struggled to find compatible blood donors, causing her to miss school and other important events. However, after discovering the dedicated website for thalassemia patients, they were able to connect with a community of people who understood their struggles. They found a network of donors who were willing to help, and Aisha was able to receive transfusions regularly without any delays.',
    image: testimonial1
  },
  {
    title: "Imran's Journey to Hope on Blood Warriors",
    story:
      'Imran was a thalassemia patient who had been living with the condition for many years. However, he had always felt alone and isolated, as he did not know anyone else who was going through the same challenges. That was until he discovered the dedicated website for thalassemia patients. Through the platform, Imran was able to connect with other patients and families, share his experiences, and find the support he needed. The platform helped him feel less alone and gave him hope for the future.',
    image: testimonial2
  },
  {
    title: "Priya's Dream: BW Helps Her Education",
    story:
      'Priya was a thalassemia patient who was struggling to manage her condition while also pursuing her education. She had to miss school often due to her transfusions and felt like she was falling behind. However, after discovering the dedicated website for thalassemia patients, she found a community of people who encouraged her to pursue her dreams. She found a network of donors who were willing to help her get the transfusions she needed, and she was able to continue her education without any further setbacks.',
    image: testimonial3
  }
]

// Donation request card labels
export const DONATION_REQUEST_HEADING = 'Active Donation Requests'
export const PATIENT_REQUEST_LABELS: DonationReuqestPatientDetails = {
  patientName: 'Patient Name:',
  bloodGroup: 'Blood Group:',
  quantity: 'Quantity:',
  address: 'Patient Address:',
  contact: 'Contact:',
  extraDetails: 'More details:'
}
export const BLOOD_GROUPS = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']

// Sample Responses
export const SAMPLE_DONATION_DETAILS: DonationRequestDetails = {
  patient: {
    patientName: 'Vijay MS',
    bloodGroup: 'B+',
    quantity: '4 units',
    address: 'ABC Hospital, 123 Main Street',
    contact: '+91987654321',
    extraDetails:
      'Required within 2 days Eget fermentum felis mollis auctor nam turpis et penatibus.'
  },
  profile: {
    timeStamp: new Date(),
    userName: 'Bhageerathi Patel',
    image: person1
  }
}
