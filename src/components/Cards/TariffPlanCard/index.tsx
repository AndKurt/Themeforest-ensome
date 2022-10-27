import React, { useState } from 'react'

import check_mark from '@assets/svg/other/check_mark.svg'
import { CommonButton, Paragraph, Title } from '@components/index'
import { BlockLayout } from '@layout/BlockLayout'

import { CheckMarkImg, OptionEntity, TariffPlanCardWrapper } from './styled'
import { ITariffPlanCard } from './types'

export const TariffPlanCard = ({ plan, price, options }: ITariffPlanCard) => {
  const [buttonColorPeriod1, setButtonColorPeriod1] = useState<'primary' | 'default'>('primary')
  const [buttonColorPeriod2, setButtonColorPeriod2] = useState<'primary' | 'default'>('default')

  const handleChosePeriod = () => {
    setButtonColorPeriod1((prev) => (prev === 'primary' ? 'default' : 'primary'))
    setButtonColorPeriod2((prev) => (prev === 'default' ? 'primary' : 'default'))
  }

  return (
    <TariffPlanCardWrapper>
      <Title size="bold_6" bottom={20}>
        {plan}
      </Title>
      <BlockLayout directionRow jc="space-between" bottom={33}>
        <Title size="bold_4">{price}</Title>
        <BlockLayout directionRow width={92} jc="space-between">
          <CommonButton
            name="Mo"
            width="XS"
            color={buttonColorPeriod1}
            height="XS"
            radius="S"
            border
            handleClick={handleChosePeriod}
          />
          <CommonButton
            name="Yr"
            width="XS"
            height="XS"
            color={buttonColorPeriod2}
            radius="S"
            border
            handleClick={handleChosePeriod}
          />
        </BlockLayout>
      </BlockLayout>
      <CommonButton
        name="Choose plan"
        textSize="medium_7"
        color="primary"
        width="XXL"
        height="S"
        radius="S"
        bottom={30}
        handleClick={() => {}}
      />
      {options.map((value) => (
        <OptionEntity key={value}>
          <CheckMarkImg src={check_mark} alt="check-mark" />
          <Paragraph size="regular_3" color="BLACK">
            {value}
          </Paragraph>
        </OptionEntity>
      ))}
    </TariffPlanCardWrapper>
  )
}
