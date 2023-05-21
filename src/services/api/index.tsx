/* eslint-disable @typescript-eslint/restrict-plus-operands */
import axios from 'axios'
import { DonationRequestDetails } from 'src/utils/types'
import { DONATIONS_REQUEST_URL } from 'src/utils/urls'

export const getDonationRequests = async () => {
  return await axios.get<DonationRequestDetails[]>(DONATIONS_REQUEST_URL)
}
