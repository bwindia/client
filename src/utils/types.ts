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
