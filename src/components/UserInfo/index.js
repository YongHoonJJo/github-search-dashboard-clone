import React from 'react'
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import UserCard from './UserCard'
import Followers from './Followers'

const UserInfoCard = ({title, children}) => {
  return (
    <UserInfoCardWrap>
      <UserInfoCardLabel>{title}</UserInfoCardLabel>
      {children}
    </UserInfoCardWrap>
  )
}

function UserInfo(props) {

  return (
    <UserInfoSection>
      <SectionWrap>
        <UserInfoCard title={'User'}>
          <UserCard {...props} />
        </UserInfoCard>
        <UserInfoCard title={'Followers'}>
          <Followers />
        </UserInfoCard>
      </SectionWrap>
    </UserInfoSection>
  )
}

export default UserInfo

const UserInfoSection = styled.section`
  padding: 1rem 0;
`

const SectionWrap = styled.div`
  width: 100%; 
  padding-top: 2rem;
  
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

/** UserInfoCard **/
const UserInfoCardWrap = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
`

const UserInfoCardLabel = styled.p`
  padding: 0.5rem 1rem 0 1rem; 
  background: #fff;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
`
