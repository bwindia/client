import { ARTICLES, TESTIMONIALS } from 'src/utils/constants'
import ArticleCard from '.'

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard
}

export const Card = {
  args: {
    data: ARTICLES[0]
  }
}

// export const LeftSideTestimonial = {
//   args: {
//     variant: 'left',
//     data: TESTIMONIALS[1]
//   }
// }
