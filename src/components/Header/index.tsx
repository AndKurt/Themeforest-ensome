import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@assets/logo/logo_blue.svg'
import { headerNavigation } from '@constants/index'
import { ContentLayout } from '@layout/ContentLayout'

import { HeaderWrapper, StyledLink } from './styled'

import { Button } from '..'

export const Header = () => (
  <HeaderWrapper>
    <ContentLayout bgColor="light" contentDirection="row">
      <>
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
        <Button buttonSize="small" color="blue" radius="small" text="Watch the demo" />
      </>
    </ContentLayout>
  </HeaderWrapper>
)
