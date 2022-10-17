import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import {
  AboutUsPage,
  BlogPage,
  MainPage,
  ServicePage,
  ContactPage,
  OurTeamPage,
  FAQPage,
  SolutionsPage,
  NotFoundPage,
} from '@pages/index'

const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/about-us', element: <AboutUsPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contacts', element: <ContactPage /> },
  { path: '/our-team', element: <OurTeamPage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/solutions', element: <SolutionsPage /> },
  { path: '/404', element: <NotFoundPage /> },
  { path: '*', element: <Navigate to="/404" /> },
]

export const Router = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
)
