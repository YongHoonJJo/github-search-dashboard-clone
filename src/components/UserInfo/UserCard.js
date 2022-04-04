import React from 'react'
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import useCurrentUserCardInfo from "./hooks/useCurrentUserCardInfo";

const UserCard = () => {
  const { avatar_url, name, twitter_username, html_url, bio, company, location, blog } = useCurrentUserCardInfo()

  return (
    <UserCardWrap>
      <UserCardHeader>
        <RoundImgBox w={75} h={75}>
          <Img src={avatar_url} alt="profile-img"/>
        </RoundImgBox>
        <UserCardDesc>
          <h3>{name}</h3>
          <h4>@{twitter_username || '-'}</h4>
        </UserCardDesc>
        <a href={html_url}>
          <FollowButton>Follow</FollowButton>
        </a>
      </UserCardHeader>
      <UserCardBio>{bio || ' '}</UserCardBio>
      <OtherInfo>
        <MdBusiness /> {company}
      </OtherInfo>
      <OtherInfo>
        <MdLocationOn /> {location || 'Earth'}
      </OtherInfo>
      <OtherInfo>
        <MdLink /> <ColorSpan>{blog}</ColorSpan>
      </OtherInfo>
    </UserCardWrap>
  )
}

export default UserCard

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
