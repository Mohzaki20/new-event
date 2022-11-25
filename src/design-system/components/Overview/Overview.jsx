import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { OverviewWrapper, Title, Description } from './styles';

function Overview({icon,title,Desc}) {
  return (
    <OverviewWrapper>
      <div>
      <FontAwesomeIcon color='#f2545f' size='2xl' icon={icon} />
      </div>
      <Title>{title}</Title>
      <Description>{Desc}</Description>
    </OverviewWrapper>
  )
}

export default Overview;