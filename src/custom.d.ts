declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.js'
declare module '*.mp4'
declare module '*.svg'
declare module '*.pdf' {
  const content: string
  export default content
}
