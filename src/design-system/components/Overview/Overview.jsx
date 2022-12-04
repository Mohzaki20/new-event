import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { OverviewWrapper, Title, Description } from './styles';

function OverviewComponent({icon,title,Desc}) {
  return (
    <OverviewWrapper>
      <div>
      <FontAwesomeIcon color='#f2545f' size='3x' icon={icon} />
      </div>
      <Title>{title}</Title>
      <Description>{Desc}</Description>
    </OverviewWrapper>
  )
}

export default OverviewComponent;