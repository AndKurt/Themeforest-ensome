import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import playIcon from '@assets/svg/button_img/icon_play_circle.svg'
import logo from '@assets/svg/logo_blue.svg'
import { headerNavigation } from '@constants/index'
import { ContentLayout } from '@layout/ContentLayout'

import { HeaderWrapper, StyledLink } from './styled'

import { CommonButton, Section } from '..'

export const Header = () => {
  const [playMedia, setPlayMedia] = useState(false)

  const handlePlayMedia = useCallback(() => {
    setPlayMedia(true)
  }, [])

  return (
    <HeaderWrapper>
      <ContentLayout background="light" contentDirection="row">
        <Section>
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
            width="M"
            height="S"
            color="primary"
            radius="S"
            name="Watch the demo"
            icon={playIcon}
            textSize="semibold_7"
            padding={10}
            isShadow
            handleClick={handlePlayMedia}
          />
        </Section>
      </ContentLayout>
    </HeaderWrapper>
  )
}
