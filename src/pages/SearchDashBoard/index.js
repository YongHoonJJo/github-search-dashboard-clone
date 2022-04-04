import React, { useState } from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SearchInput'
import Info from '../../components/Info'
import UserInfo from '../../components/UserInfo'

function SearchDashBoard() {
  const [searchText, setSearchText] = useState('')

  const searchUser = () => {

  }

  return (
    <SearchDashBoardMain>
      <SearchInput
        searchText={searchText}
        chageHandler={(text) => setSearchText(text)}
        searchUser={searchUser}
      />
      <Info />
      <UserInfo />
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
