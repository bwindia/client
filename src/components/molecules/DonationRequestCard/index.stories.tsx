import { SAMPLE_DONATION_DETAILS } from 'src/utils/constants'
import DonationRequestCard from '.'

export default {
  title: 'Molecules/DonationRequestCard',
  component: DonationRequestCard
}

export const Card = {
  args: {
    data: SAMPLE_DONATION_DETAILS
  }
}
