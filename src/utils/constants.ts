/* eslint-disable quotes */
import {
  BloodGroup,
  DonationRequestDetails,
  DonationReuqestPatientDetails,
  Heading,
  IArticle,
  IJourney,
  IProgram,
  NavbarItem,
  TestimonialType
} from './types'
import person1 from 'src/assets/avatars/person3.png'
import impact1 from 'src/assets/icons/home/impact1.svg'
import impact2 from 'src/assets/icons/home/impact2.svg'
import impact3 from 'src/assets/icons/home/impact3.svg'
import impact4 from 'src/assets/icons/home/impact4.svg'
import impact5 from 'src/assets/icons/home/impact5.svg'
import impact6 from 'src/assets/icons/home/impact6.svg'

// Our partner imports
import partner1 from 'src/assets/images/partners/partner1.png'
import partner2 from 'src/assets/images/partners/partner2.png'
import partner3 from 'src/assets/images/partners/partner3.png'
import partner4 from 'src/assets/images/partners/partner4.png'
import partner5 from 'src/assets/images/partners/partner5.png'
import partner6 from 'src/assets/images/partners/partner6.png'

// Testimonial imports
import testimonial1 from 'src/assets/images/testimonials/testimonial1.png'
import testimonial2 from 'src/assets/images/testimonials/testimonial2.png'
import testimonial3 from 'src/assets/images/testimonials/testimonial3.png'
import testimonial4 from 'src/assets/images/testimonials/testimonial4.png'
import testimonial5 from 'src/assets/images/testimonials/testimonial5.png'
import testimonial6 from 'src/assets/images/testimonials/testimonial6.png'
import testimonial7 from 'src/assets/images/testimonials/testimonial7.png'
import testimonial8 from 'src/assets/images/testimonials/testimonial8.png'

// Journey images
import journey1 from 'src/assets/images/journey/journey1.png'
import journey2 from 'src/assets/images/journey/journey2.png'
import journey3 from 'src/assets/images/journey/journey3.png'
import journey4 from 'src/assets/images/journey/journey4.png'
import journey5 from 'src/assets/images/journey/journey5.png'
import journey6 from 'src/assets/images/journey/journey6.png'
import journey7 from 'src/assets/images/journey/journey7.png'

import {
  ABOUT_US_PAGE_ROUTE,
  AWARENESS_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  DONATION_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PRIVACY_POLICY_PAGE_ROUTE,
  TERMS_CONDITIONS_PAGE_ROUTE
} from './urls'
import thalassemia1 from 'src/assets/illustrations/thalassemia-1.svg'
import thalassemia2 from 'src/assets/illustrations/thalassemia-2.svg'
import thalassemia3 from 'src/assets/illustrations/thalassemia-3.svg'

// Button Labels
export const SIGN_IN = 'Sign In'
export const GET_BLOOD_NOW = 'Get Blood Now'
export const DONATE_BLOOD = 'Donate Blood'
export const REGISTER_NOW = 'Register Now'
export const READ_FULL_STORY = 'Read full Story'

// Navbar Labels
export const HOME = 'Home'
export const ABOUT_US = 'About Us'
export const AWARENESS = 'Awareness'
export const DONATE = 'Contribute Now'
export const PATIENT = 'Patient'
export const DONOR = 'Donor'
export const VOLUNTEER = 'Volunteer'

// Footer Labels
export const CONTACT_OUR_TEAM = 'Contact to our team'
export const PRIVACY_POLICY = 'Privacy Policy'
export const TERMS_CONDITIONS = 'Terms and Conditions'
export const CONTACT_US = 'Contact us'
export const FOOTER_LABELS = [
  {
    label: HOME,
    path: HOME_PAGE_ROUTE
  },
  {
    label: ABOUT_US,
    path: ABOUT_US_PAGE_ROUTE
  },
  {
    label: 'Donate',
    path: DONATION_PAGE_ROUTE
  },
  {
    label: PRIVACY_POLICY,
    path: PRIVACY_POLICY_PAGE_ROUTE
  },
  {
    label: TERMS_CONDITIONS,
    path: TERMS_CONDITIONS_PAGE_ROUTE
  },
  {
    label: CONTACT_US,
    path: CONTACT_PAGE_ROUTE
  }
]

// Home page
export const HERO_SECTION: Heading = {
  title: 'Save Life, Donate Blood',
  subContent:
    'Your blood can be the lifeline for Thalassemia patients. Join us as a donor and make a life-saving impact. Together, we can bring hope, transform lives, and pave the way for a Thalassemia-free future. Be the change you want to see!'
}
export const TESTIMONIAL_SECTION_TITLE = 'Testimonials'
export const TESTIMONIALS: TestimonialType[] = [
  {
    name: 'Prashanth',
    role: 'Donor',
    story:
      'Learning about the struggles of those affected by Thalassemia really helped put things into perspective for me.',
    image: testimonial1
  },
  {
    name: 'Mahanth',
    role: 'Donor',
    story:
      'Knowing that 30-minutes of my time every 3-4 months will save a patient and reduce the anxiety of those looking for donors means everything to me',
    image: testimonial2
  },
  {
    name: 'Roshan Singh',
    role: 'Donor',
    story:
      'I think we all are afraid of something we never did before. Just like that, my fear of donating blood was gone after I gave my blood for the first time.',
    image: testimonial3
  },
  {
    name: 'Yovodh Raj',
    role: 'Donor',
    story:
      'Is COVID stopping you from saving lives? Hear from one of our donors, how he made it through and saved a life.',
    image: testimonial4
  },
  {
    name: 'Navya Neela',
    role: 'Volunteer',
    story:
      'My favorite part about volunteering at blood Warriors is the space and flexibility, the freedom to express and openly communicate to my team. Learning new things everyday makes the entire experience better.',
    image: testimonial5
  },
  {
    name: 'Priyanka Bikkasani',
    role: 'Volunteer',
    story:
      'Volunteering at Blood Warriors has helped me again self confidence, problem-solving skills, leadership abilities and develop greater insights about myself and the world around me.',
    image: testimonial6
  },
  {
    name: 'Sai Pallavi',
    role: 'Volunteer',
    story:
      'Volunteering has taught me that the small steps you take everyday will make a significant impact in the future even if it seems to bear no fruit in the present.',
    image: testimonial7
  },
  {
    name: 'Satya Sai',
    role: 'Volunteer',
    story:
      'Being a brigadier taught me responsibility is learned through experience and that effective communication improves with practice.',
    image: testimonial8
  }
]
export const WHAT_THALASSEMIA = {
  title: 'What is Thalassemia?',
  content:
    'An Inherited blood disorder characterized by less oxygen-carrying proteins(Hemoglobin) and fewer Red Blood Cells in the body than normal.'
}
export const THALASSEMIA_INFO = [
  {
    image: thalassemia1,
    content: 'A child is born with a genetic blood disorder - Thalassemia Major'
  },
  {
    image: thalassemia2,
    content:
      'Without medical support and healthcare, the blood disorder proves fatal by the age of 30'
  },
  {
    image: thalassemia3,
    content:
      'The body is unable to produce sufficient Hemoglobin to deliver oxygen to various parts of body.'
  }
]
export const THALASSEMIA_IMPACT = [
  { icon: impact1, count: '4%', content: 'of the population' },
  { icon: impact2, count: '1,00,000', content: 'Patients In India' },
  { icon: impact3, count: '10,000', content: 'added every year' },
  { icon: impact4, count: '1,00,000', content: 'Transfusions every Year' },
  { icon: impact5, count: '30', content: 'Average Age' },
  { icon: impact6, count: '500-700', content: 'Transfusion in life span' }
]
export const OUR_APPROACH = {
  heading: 'Our Approach',
  content: [
    {
      title: 'Ecosystem',
      values: [
        {
          value: 'Blood Bridge',
          color: '#FD6666'
        },
        {
          value: 'Blood Donation Camps',
          color: '#FCAA49'
        },
        {
          value: 'Technology for transparency and ease',
          color: '#41A7F1'
        },
        {
          value: 'Donor-Patient Relationship',
          color: '#64FFE3'
        }
      ]
    },
    {
      title: 'Awareness',
      values: [
        {
          value: 'Sessions on HPLC Testing',
          color: '#FF5678'
        },
        {
          value: 'Digital Campaigns',
          color: '#AE41F1'
        },
        {
          value: 'On Ground Campaigns',
          color: '#29D64F'
        }
      ]
    }
  ]
}
export const VISION_VALUES = {
  vision: {
    title: 'Our Vision',
    content:
      'A Country where all the Thalassemia Patients receive the medical Support and live a healthy life with ',
    highlight: 'zero patients born by 2035.'
  },
  values: {
    title: 'Our Values',
    content: ['Empathy Over Sympathy', 'Circle of Safety', 'Collaboration']
  }
}
export const OUR_PARTNERS = {
  title: 'Our Partners',
  partners: [partner1, partner2, partner3, partner4, partner5, partner6]
}

// About us
export const WHO_WE_ARE = 'WHO ARE WE?'
export const WHO_WE_ARE_CONTENT =
  'We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and break the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of support for those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal diagnosis, we aim to identify carriers of Thalassemia, and build a future where this debilitating disorder is a thing of the past.'
export const OUR_IMPACT = 'OUR IMPACT'
export const OUR_PROGRAM = 'Our Programs'
export const OUR_PROGRAM_HEADING = {
  title: 'Raising Awareness to Combat Thalassemia',
  subContent:
    "At present, Thalassemia poses a significant burden on India's healthcare system, with approximately 10,000 new patients born each year. To tackle this preventive disorder at its source, it is crucial to create widespread awareness and encourage action. Our ultimate vision is to make India Thalassemia free by 2035."
}
export const VISION_MISSION = [
  {
    title: 'VISION',
    content:
      'A future where every child is born free of Thalassemia and affected individuals receive holistic support to live fulfilling, healthy lives without the burden of disease.'
  },
  {
    title: 'MISSION',
    content:
      'Empowering the community to break stigmas and support Thalassemia patients through building an ecosystem and raising awareness.'
  }
]
export const OUR_TEAM = 'Our Team'
export const JOURNEY_TITLE = 'Our Journey'

// Awareness page
export const SEARCH_PLACEHOLDER = 'Search blogs, articles'
export const YOU_NEEDNOT_BE_DOCTOR = 'You need not be a doctor to save life!'
export const DONATION_VIDEO_TITLE = 'Why is Blood Donation a Problem?'
export const DONATION_VIDEO_CONTENT =
  'Id eget etiam pulvinar dolor. Vivamus lacus sociis eu mi eu in mi. Porttitor sapien tortor feugiat elementum donec. Sed eu cursus nec libero gravida sapien. Proin tempor ornare vitae rutrum proin aliquet. Tortor viverra a scelerisque tortor ornare. Lacus ullamcorper purus diam sit amet diam dui vestibulum. In tincidunt eget porttitor gravida tellus in ipsum placerat. Nunc lorem risus consectetur auctor ut sagittis quam neque cursus. '
export const BLOGS_HEADING = 'From Our Blogs'
export const FAQS_HEADING = 'Frequently Asked Questions (FAQs)'
export const RELATED_BLOGS = 'Related blogs'

// Donation/Contribute Page labels
export const CONTRIBUTE_TITLE =
  'Contribute Now and Join the Fight Against Thalassemia with Blood Warriors Foundation!'

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
export const BLOOD_GROUPS: BloodGroup[] = [
  'O+',
  'O-',
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-'
]

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

// Things to edit

// Blogs
export const ARTICLES: IArticle[] = [
  {
    id: '1',
    title: 'Why is Blood Donation a Problem?',
    article:
      'Id eget etiam pulvinar dolor. Vivamus lacus sociis eu mi eu in mi. Porttitor sapien tortor feugiat elementum donex',
    image: 'https://source.unsplash.com/random/600x600/?profile-picture',
    user: {
      name: 'Jacob Jones',
      profilePicture: person1
    },
    createdAt: '1 Feb, 2020'
  }
]

// Navbar items
export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    name: HOME,
    route: HOME_PAGE_ROUTE,
    type: 'normal',
    children: []
  },
  {
    name: ABOUT_US,
    route: ABOUT_US_PAGE_ROUTE,
    type: 'normal',
    children: []
  },
  {
    name: AWARENESS,
    route: AWARENESS_PAGE_ROUTE,
    type: 'normal',
    children: []
  },
  {
    name: DONATE,
    route: DONATION_PAGE_ROUTE,
    type: 'button',
    children: []
  }
  // {
  //   name: REGISTER_NOW,
  //   route: REGISTER_PAGE_ROUTE,
  //   type: 'normal',
  //   children: [
  //     {
  //       name: PATIENT,
  //       route: REGISTER_PAGE_ROUTE,
  //       type: 'normal',
  //       children: []
  //     },
  //     {
  //       name: DONOR,
  //       route: REGISTER_PAGE_ROUTE,
  //       type: 'normal',
  //       children: []
  //     },
  //     {
  //       name: VOLUNTEER,
  //       route: REGISTER_PAGE_ROUTE,
  //       type: 'normal',
  //       children: []
  //     }
  //   ]
  // },
  // {
  //   name: SIGN_IN,
  //   route: SIGNIN_PAGE_ROUTE,
  //   type: 'button',
  //   children: []
  // }
]

// Our impact
export const IMPACT = [
  {
    title: 'Blood Donations',
    count: '1332'
  },
  {
    title: 'Blood Bridges',
    count: '21'
  },
  {
    title: 'Registered Blood Donors',
    count: '1363'
  },
  {
    title: 'Digital Outreach',
    count: '1500+'
  },
  {
    title: 'Regular Blood Donors',
    count: '200+'
  },
  {
    title: 'Collaborations',
    count: '10+'
  },
  {
    title: 'HPLC tests',
    count: '20+'
  }
]

// Our Programs
export const PROGRAMS: IProgram[] = [
  {
    id: '1',
    title: 'HPLC Testing Sessions',
    content:
      "HPLC testing is a preventive measure for Thalassemia carrier screening. By undergoing this Rs. 800 test, individuals can contribute to preventing Thalassemia. India's carrier population is 4% out of 1.4 billion people, making HPLC testing significant in combatting Thalassemia."
  },
  {
    id: '2',
    title: 'Digital Camapigns',
    content:
      'In the digital age, social media is a central platform for communication. Our comprehensive campaigns cover Thalassemia awareness, blood donation, and patient stories. Using engaging formats like reels, posters, and statuses, we maximize outreach and engagement.'
  },
  {
    id: '3',
    title: 'On-Ground Campaigns',
    content:
      'Face-to-face interactions have the power to inspire. We conduct awareness sessions in colleges and corporate offices, covering Thalassemia, blood donation, volunteering, and active contributions. We aim to expand our reach with new venues and establish college chapters, work-in-progress. Stay tuned for updates.'
  },
  {
    id: '4',
    title: 'Blood Bridge Chatbot',
    content:
      "Introducing Blood Bridge Chatbot, India's first AI-based Thalassemia chatbot. It offers instant access to reliable information, personalized support, and emotional assistance for Thalassemia patients and caregivers. Revolutionizing interactions with resources, it empowers with knowledge for a brighter future."
  }
]

// Our Journey
export const JOURNEY: IJourney[] = [
  {
    date: '14 April 2020',
    description: ['The Beginning'],
    image: journey1
  },
  {
    date: 'May 2020',
    description: ['First Active Blood Bridge'],
    image: journey2
  },
  {
    date: 'July 2020',
    description: ['Fifty Voluntary', 'Blood Donations'],
    image: journey3
  },
  {
    date: 'February 2021',
    description: [
      '19 Active Blood Bridges',
      '524 Blood Donations',
      '684 Donor Sign ups',
      '30 Volunteers',
      '4 Partner NGOs',
      '1 Blood Bank'
    ],
    image: journey4
  },
  {
    date: 'November 2021',
    description: ['Voluntary Blood', 'Crossed 1000', 'Donations'],
    image: journey5
  },
  {
    date: 'November 2022',
    description: [
      'Volunteer Recruitment',
      'First On Ground',
      'Drive Conducted'
    ],
    image: journey6
  },
  {
    date: 'December 2022',
    description: ['Full time Employee', 'Onboarded First'],
    image: journey7
  }
]
