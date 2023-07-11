import { TEAM_MEMBERS } from 'src/utils/constants'
import TeamCard from '.'

export default {
  title: 'Molecules/TeamCard',
  component: TeamCard
}

export const Card = {
  args: {
    data: TEAM_MEMBERS[0]
  }
}
