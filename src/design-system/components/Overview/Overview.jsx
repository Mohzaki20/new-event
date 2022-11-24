import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Describtion, OverviewWrapper, Title } from './styles';

function Overview({icon,title,children}) {
  return (
    <OverviewWrapper>
      <div>
      <FontAwesomeIcon color='#f2545f' size='2xl' icon={icon} />
      </div>
      <Title>{title}</Title>
      <Describtion>{children}</Describtion>
    </OverviewWrapper>
  )
}

export default Overview;