import React from 'react'
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const UserCard = () => {
  return (
    <UserCardWrap>
      <UserCardHeader>
        <RoundImgBox w={75} h={75}>
          <Img src="https://avatars.githubusercontent.com/u/74251593?v=4" alt="profile-img"/>
        </RoundImgBox>
        <UserCardDesc>
          <h3>Jost</h3>
          <h4>@-</h4>
        </UserCardDesc>
        <FollowButton>Follow</FollowButton>
      </UserCardHeader>
      <UserCardBio>Creator of Coding Addict</UserCardBio>
      <OtherInfo>
        <MdBusiness /> {`Coding Addict`}
      </OtherInfo>
      <OtherInfo>
        <MdLocationOn /> {`경기도 시흥`}
      </OtherInfo>
      <OtherInfo>
        <MdLink /> <ColorSpan>{`www.johnsmilga.com`}</ColorSpan>
      </OtherInfo>
    </UserCardWrap>
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
          b
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

/** UserCard **/
const UserCardWrap = styled.div`
  padding: 1.5rem 2rem;
`

const UserCardHeader = styled.header`
  display: flex; 
  align-items: center;
  gap: 1rem;
  
  margin-bottom: 1rem;
`

const UserCardDesc = styled.div`
  flex: 1;
  
  h3 {
    margin-bottom: 0.25rem;
    line-height: 1;
    font-size: 1rem;
  }
  
  h4 {
    color: hsl(210, 22%, 49%);
  }
`

const FollowButton = styled.button`
  cursor: pointer;
  border: 1px solid hsl(185, 62%, 45%);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  text-transform: capitalize;
  transition: all 0.3s linear;
  
  outline: none;
  background: #fff;
  color: hsl(185, 62%, 45%);
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.1rem;
`

const UserCardBio = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: hsl(209, 34%, 30%);
`

const OtherInfo = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.25rem;
  
  display: flex;
  align-items: center;
  color: hsl(210, 22%, 49%);
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }
`

const ColorSpan = styled.span`
  color: hsl(185, 62%, 45%);
`

/** Common **/
const RoundImgBox = styled.div`
  width: ${({w}) => w}px;
  height: ${({h}) => h}px;
  
  border-radius: 70%;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
`
