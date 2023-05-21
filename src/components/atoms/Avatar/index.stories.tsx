import Navbar from '.'

export default {
  title: 'Atoms/Avatar',
  component: Navbar,
  tags: ['autodocs']
}

export const RoundedAvatar = {
  args: {
    src: 'https://source.unsplash.com/random/600x600/?profile-picture'
  }
}

export const SquareAvatar = {
  args: {
    src: 'https://source.unsplash.com/random/600x600/?profile-picture',
    variant: 'rounded'
  }
}

export const TextAvatar = {
  args: {
    children: 'JS',
    variant: 'circular',
    width: '4rem',
    height: '4rem'
  }
}
