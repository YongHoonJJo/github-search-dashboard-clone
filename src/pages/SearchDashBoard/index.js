import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SearchInput'
import Info from '../../components/Info'
import UserInfo from '../../components/UserInfo'

import usersApi from "../../services/apis/users";

function SearchDashBoard() {

  const [userInfo, setUserInfo] = useState({
    login: "YongHoonJJo",
    avatar_url: "https://avatars.githubusercontent.com/u/13485924?v=4",
    html_url: "https://github.com/YongHoonJJo",

    name: "",
    company: null,
    blog: "",
    location: null,
    bio: "",
    twitter_username: null,

    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
  })
  const [searchText, setSearchText] = useState('')

  const searchUser = () => {
    fetchUser(searchText)
  }

  const fetchUser = async (user) => {
    const resp = await usersApi.getUser(user)
    setUserInfo(resp.data)
  }

  useEffect(() => {
    fetchUser('YongHoonJJo')
  }, [])

  const {
    login,
    public_repos, public_gists, followers, following,
  } = userInfo

  return (
    <SearchDashBoardMain>
      <SearchInput
        searchText={searchText}
        chageHandler={(text) => setSearchText(text)}
        searchUser={searchUser}
      />
      <Info
        publicRepos={public_repos}
        publicGists={public_gists}
        followers={followers}
        following={following}
      />
      <UserInfo
        login={login}
        {...userInfo}
      />
    </SearchDashBoardMain>
  )
}

export default SearchDashBoard

const SearchDashBoardMain = styled.main`
  width: 95vw;
  max-width: 1170px;
  
  margin: 0 auto;
  padding-bottom: 2rem; 
`
