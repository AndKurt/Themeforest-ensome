import React from 'react'

import { Title, Paragraph } from '@components/index'

import { BlogCardWrapper } from './styled'
import { IBlogCard } from './types'

export const BlogCard = ({ src, alt, date, title, paragraph, readMoreLink }: IBlogCard) => (
  <BlogCardWrapper>
    <Paragraph>{date}</Paragraph>
    <Title>{title}</Title>
    <Paragraph>{paragraph}</Paragraph>
  </BlogCardWrapper>
)
