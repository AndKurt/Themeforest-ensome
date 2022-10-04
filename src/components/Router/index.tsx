import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AboutUsPage, BlogPage, MainPage, ServicePage } from '@/pages'

export const Router = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/about-us" element={<AboutUsPage />} />
    <Route path="/service" element={<ServicePage />} />
  </Routes>
)
