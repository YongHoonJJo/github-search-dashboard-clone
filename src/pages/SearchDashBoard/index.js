import React from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SearchInput'
import Info from '../../components/Info'
import UserInfo from '../../components/UserInfo'

function SearchDashBoard() {

  return (
    <SearchDashBoardMain>
      <SearchInput/>
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
