import React from 'react'
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import UserCard from './UserCard'

const Followers = () => {

  const followers = [
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251594',
      name: 'Tarasis1',
      link: 'https://github.com/tarasis'
    },
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251595',
      name: 'Tarasis2',
      link: 'https://github.com/tarasis'
    },
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251596',
      name: 'Tarasis3',
      link: 'https://github.com/tarasis'
    },
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251597',
      name: 'Tarasis4',
      link: 'https://github.com/tarasis'
    },
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251598',
      name: 'Tarasis5',
      link: 'https://github.com/tarasis'
    },
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251599',
      name: 'Tarasis6',
      link: 'https://github.com/tarasis'
    },
    {
      profilImg: 'https://avatars.githubusercontent.com/u/74251590',
      name: 'Tarasis7',
      link: 'https://github.com/tarasis'
    },
  ].map((d, idx) => ({...d, key: idx}))

  return (
    <FollowersWrap>
      {followers.map(f => (
        <FollowerItem key={f.key}>
          <ImgBox>
            <Img src={f.profilImg} alt="profile-img"/>
          </ImgBox>
          <div>
            <FollowerName>{f.name}</FollowerName>
            <FollowerAddr href={f.link}>{f.link}</FollowerAddr>
          </div>
        </FollowerItem>))}
    </FollowersWrap>
  )
}

const UserInfoCard = ({title, children}) => {
  return (
    <UserInfoCardWrap>
      <UserInfoCardLabel>{title}</UserInfoCardLabel>
      {children}
    </UserInfoCardWrap>
  )
}

function UserInfo() {

  return (
    <UserInfoSection>
      <SectionWrap>
        <UserInfoCard title={'User'}>
          <UserCard />
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

/** Followers **/
const FollowersWrap = styled.div`
  overflow: scroll;
  height: 260px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  height: 260px;
`

const FollowerItem = styled.div`
  padding: 0.15rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ImgBox = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 70%;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
`

const FollowerName = styled.h4`
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.1rem;
  font-weight: bold;
`

const FollowerAddr = styled.a`
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
`
