export const BASE_URL = process.env.BACKEND_SERVER

// API Endpoints
export const DONATIONS_REQUEST_URL = `${BASE_URL}/donations`

// Routes
export const HOME_PAGE_ROUTE = '/home'
export const ABOUT_US_PAGE_ROUTE = '/about'
export const AWARENESS_PAGE_ROUTE = '/awareness'
export const BLOG_PAGE_ROUTE = '/awareness/blog/:id'
export const REGISTER_PAGE_ROUTE = '/register'
export const DONATION_PAGE_ROUTE = '/donate'
export const SIGNIN_PAGE_ROUTE = '/signup'
export const BLOG_PATH = (id: string) => `/awareness/blog/${id}`
export const PRIVACY_POLICY_PAGE_ROUTE = '/privacy-policy'
export const TERMS_CONDITIONS_PAGE_ROUTE = '/terms-and-conditions'
export const CONTACT_PAGE_ROUTE = '/contact-us'
