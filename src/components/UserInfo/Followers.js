import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import usersApi from "../../services/apis/users";

const Followers = ({login}) => {
  const [followers, setFollowers] = useState([])

  const fetchFollowers = async (user) => {
    const res = await usersApi.getFollowers(user)

    const resp = res.data.map(d => ({
      profileImg: d.avatar_url,
      name: d.login,
      link: d.html_url,
      key: d.id
    }))

    setFollowers(resp)
  }

  useEffect(() => {
    fetchFollowers(login || 'YongHoonJJo')
  }, [login])

  return (
    <FollowersWrap>
      {followers.map(f => (
        <FollowerItem key={f.key}>
          <ImgBox>
            <Img src={f.profileImg} alt="profile-img"/>
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
  color: hsl(210, 22%, 49%);
`
