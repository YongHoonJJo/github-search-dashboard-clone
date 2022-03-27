import React from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SearchInput'

function SearchDashBoard() {

  return (
    <SearchDashBoardMain>
      <SearchInput />
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
