import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  ABOUT_US_PAGE_ROUTE,
  AWARENESS_PAGE_ROUTE,
  BLOG_PAGE_ROUTE,
  BMS_PAGE_ROUTE,
  CANCELLATION_POLICY_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  DONATION_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PRIVACY_POLICY_PAGE_ROUTE,
  REFUND_POLICY_PAGE_ROUTE,
  TERMS_CONDITIONS_PAGE_ROUTE
} from './utils/urls'
import PageLoader from './components/templates/PageLoader'
import SEO from './components/templates/SEO'
import ErrorPage from './pages/ErrorPage'
import BmsPage from './pages/BmsPage'
const NavTemplate = lazy(() => import('./components/templates/NavTemplate'))
const HomePage = lazy(() => import('./pages/HomePage'))
const AwarenessPage = lazy(() => import('./pages/AwarnessPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const DonationPage = lazy(() => import('./pages/DonationPage'))
const PolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'))
const RefundPolicyPage = lazy(
  () => import('./pages/PolicyPages/RefundPolicyPage')
)
const CancellationPolicyPage = lazy(
  () => import('./pages/PolicyPages/CancelPolicyPage')
)

const App = () => {
  return (
    <>
      <SEO title='Blood Warriors: Empowering Thalassemia Aware Communities' />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<NavTemplate />}>
            <Route index element={<HomePage />} />
            <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
            <Route path={ABOUT_US_PAGE_ROUTE} element={<AboutUsPage />} />
            <Route path={AWARENESS_PAGE_ROUTE} element={<AwarenessPage />} />
            <Route path={BLOG_PAGE_ROUTE} element={<BlogPage />} />
            <Route path={DONATION_PAGE_ROUTE} element={<DonationPage />} />
            <Route path={PRIVACY_POLICY_PAGE_ROUTE} element={<PolicyPage />} />
            <Route
              path={TERMS_CONDITIONS_PAGE_ROUTE}
              element={<TermsConditionsPage />}
            />
            <Route path={CONTACT_PAGE_ROUTE} element={<ContactUsPage />} />
            <Route
              path={REFUND_POLICY_PAGE_ROUTE}
              element={<RefundPolicyPage />}
            />
            <Route
              path={CANCELLATION_POLICY_PAGE_ROUTE}
              element={<CancellationPolicyPage />}
            />
            <Route path={DASHBOARD_PAGE_ROUTE} element={<DashboardPage />} />
            <Route path={BMS_PAGE_ROUTE} element={<BmsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
