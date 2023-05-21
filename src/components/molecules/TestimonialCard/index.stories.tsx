import { TESTIMONIALS } from 'src/utils/constants'
import TestimonialCard from '.'

export default {
  title: 'Molecules/Testimonials',
  component: TestimonialCard
}

export const RightSideTestimonial = {
  args: {
    data: TESTIMONIALS[0]
  }
}

export const LeftSideTestimonial = {
  args: {
    variant: 'left',
    data: TESTIMONIALS[1]
  }
}
