import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const AboutUsPage = () => {
  const location = useLocation()
  useEffect(() => {
    console.log(location)

    const baseTitle = document.title
    document.title = `${baseTitle} | `
  }, [])

  return <div>AboutUsPage</div>
}
