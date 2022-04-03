import React from 'react'
import styled from 'styled-components';

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

export default Followers

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
