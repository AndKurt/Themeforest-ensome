import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import playIcon from '@assets/button_img/icon_play_circle.svg'
import logo from '@assets/logo/logo_blue.svg'
import { headerNavigation } from '@constants/index'
import { ContentLayout } from '@layout/ContentLayout'

import { HeaderWrapper, StyledLink } from './styled'

import { CommonButton } from '..'

export const Header = () => {
  const [playMedia, setPlayMedia] = useState(false)

  const handlePlayMedia = useCallback(() => {
    setPlayMedia(true)
  }, [])

  return (
    <HeaderWrapper>
      <ContentLayout bgColor="light" contentDirection="row">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          {headerNavigation.map(({ name, path }) => (
            <StyledLink key={name} to={path}>
              {name}
            </StyledLink>
          ))}
        </nav>
        <CommonButton
          buttonSize="small"
          color="blue"
          radius="small"
          name="Watch the demo"
          icon={playIcon}
          size="semibold_7"
          padding={10}
          handleClick={handlePlayMedia}
        />
      </ContentLayout>
    </HeaderWrapper>
  )
}
