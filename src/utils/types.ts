export interface Heading {
  title: string
  subContent?: string
}

export interface TestimonialType {
  name: string
  role: string
  story: string
  image: string
}

export interface User {
  name: string
  profilePicture?: string
}

export interface IArticle {
  id: string
  title: string
  article: string
  image: string
  user: User
  createdAt: string
}

export interface IFaq {
  question: string
  answer: string
}

export interface IFaqSection {
  topic: string
  data: IFaq[]
}

export interface DonationReuqestPatientDetails {
  patientName: string
  bloodGroup: string
  quantity: string
  address: string
  contact: string
  extraDetails?: string
}

export interface DonationReuqestProfileDetails {
  timeStamp: Date
  userName: string
  image?: string
}

export interface DonationRequestDetails {
  patient: DonationReuqestPatientDetails
  profile: DonationReuqestProfileDetails
}

export type BloodGroup = 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-'

export interface NavbarItem {
  name: string
  route: string
  type: 'normal' | 'button'
  children: NavbarItem[]
}

export interface IProgram {
  id: string
  title: string
  content: string
}

export interface IJourney {
  date: string
  description: string[]
}

export interface ITeamMember {
  image: string
  name: string
  role: string
}
