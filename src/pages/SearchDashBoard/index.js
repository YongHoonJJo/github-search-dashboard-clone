import React from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SearchInput'
import Info from '../../components/Info'

function SearchDashBoard() {

  return (
    <SearchDashBoardMain>
      <SearchInput />
      <Info />
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
