import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AwarenessPage from './pages/AwarnessPage'
import NavTemplate from './components/templates/NavTemplate'
import {
  ABOUT_US_PAGE_ROUTE,
  AWARENESS_PAGE_ROUTE,
  BLOG_PAGE_ROUTE,
  DONATION_PAGE_ROUTE,
  HOME_PAGE_ROUTE
} from './utils/urls'
import AboutUsPage from './pages/AboutUsPage'
import BlogPage from './pages/BlogPage'
import DonationPage from './pages/DonationPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavTemplate />}>
          <Route index element={<HomePage />} />
          <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
          <Route path={ABOUT_US_PAGE_ROUTE} element={<AboutUsPage />} />
          <Route path={AWARENESS_PAGE_ROUTE} element={<AwarenessPage />} />
          <Route path={BLOG_PAGE_ROUTE} element={<BlogPage />} />
          <Route path={DONATION_PAGE_ROUTE} element={<DonationPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
