import { ARTICLES, FAQS, TESTIMONIALS } from 'src/utils/constants'
import Accordion from '.'

export default {
  title: 'Molecules/Accordion',
  component: Accordion
}

export const AccordionView = {
  args: {
    data: FAQS[0].data[0]
  }
}

// export const LeftSideTestimonial = {
//   args: {
//     variant: 'left',
//     data: TESTIMONIALS[1]
//   }
// }
