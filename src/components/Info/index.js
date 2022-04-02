import React from 'react'
import styled from 'styled-components';

import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const InfoCard = ({ icon, label, value, color, bgColor }) => {
  return (
    <InfoCardWrap>
      <IconCircle color={color} bgColor={bgColor}>{icon}</IconCircle>
      <TextBox>
        <h3>{value}</h3>
        <p>{label}</p>
      </TextBox>
    </InfoCardWrap>
  )
}

function Info() {

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'Repos',
      value: 65,
      color: '#da4a91',
      bgColor: '#ffe0f0'
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'Followers',
      value: 61,
      color: 'hsl(185, 62%, 45%)',
      bgColor: 'hsl(186, 100%, 94%)',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'Following',
      value: 106,
      color: '#5d55fa',
      bgColor: '#e6e6ff'
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'Gists',
      value: 12,
      color: '#f0b429',
      bgColor: '#fffbea'
    },
  ];

  return (
    <InfoSection>
      {items.map(item => (
        <InfoCard
          key={item.id}
          {...item}
        />))}
    </InfoSection>
  )
}

export default Info

const InfoSection = styled.section`
  padding: 1rem 0;
  display: flex;
  gap: 2rem;
`

const InfoCardWrap = styled.div`
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 0.25rem;
  
  display: flex;
  gap: 3rem;
  flex: 1;
`

const IconCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({bgColor}) => bgColor};
  
  color: ${({color}) => color};
  font-size: 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextBox = styled.div`
  h3 {
    font-size: 1.75rem;
    lien-height: 1;
    letter-spacing: 0;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
  p {
    color: hsl(210, 22%, 49%);
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
  }
`
