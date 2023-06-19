export interface Heading {
  title: string
  subContent?: string
}

export interface TestimonialType {
  title: string
  story: string
  image: string
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
