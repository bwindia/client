import { HOME_PAGE_ROUTE } from './urls'

export const calculateTimeDifference = (date: Date): string => {
  console.log(new Date(date))
  const currentTime = new Date()
  console.log(currentTime)

  const milliseconds = currentTime.getTime() - new Date(date).getTime()
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60

  // 👇️ If you want to roll hours over, e.g. 00 to 24
  // 👇️ uncomment the line below
  // uncommenting next line gets you `00:00:00` instead of `24:00:00`
  // or `12:15:31` instead of `36:15:31`, etc.
  // 👇️ (roll hours over)
  // hours = hours % 24;

  //   return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
  //     seconds
  //   )}`

  return `${hours} hours ago`

  //   console.log(new Date(currentTime.valueOf() - new Date(date).valueOf()))
  // return date.toString()
}

// const padTo2Digits = (num: number) => {
//   return num.toString().padStart(2)
// }

export const getRouteParent = (path: string): string => {
  try {
    const decodedUrl: string[] = path.split('/')
    if (decodedUrl.length === 2 && decodedUrl[1] === '') {
      return HOME_PAGE_ROUTE
    }
    return `/${decodedUrl[1]}`
  } catch (error) {
    return HOME_PAGE_ROUTE
  }
}
