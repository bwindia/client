import { PROGRAMS, TESTIMONIALS } from 'src/utils/constants'
import ProgramCard from '.'

export default {
  title: 'Molecules/ProgramCard',
  component: ProgramCard
}

export const Card = {
  args: {
    data: PROGRAMS[0]
  }
}
