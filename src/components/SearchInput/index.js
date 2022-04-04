import React, { useState } from 'react'
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import useSearchUser from "./hooks/useSearchText";

function SearchInput() {
  const [searchText, setSearchText] = useState('')
  const setSearchUser = useSearchUser()

  const searchUser = () => {
    if(searchText === '') return

    setSearchUser(searchText)
  }

  return (
    <SearchInputSection>
      <InputWrapper>
        <MdSearch />
        <InputStyle
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={'Enter Github User'}
        />
        <SearchButton onClick={searchUser}>Search</SearchButton>
      </InputWrapper>
      <RequestsText>Requests: 48 / 60</RequestsText>
    </SearchInputSection>
  )
}

export default SearchInput

const SearchInputSection = styled.section`
  padding: 1rem 0;
  
  display: flex;
  align-items: center;
  gap: 1.75rem;
`

const InputWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
  background: #fff;
  
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  
  font-size: 1.3rem;
`

const InputStyle = styled.input`
  border-color: transparent;
  outline-color: #f1f5f8;
  padding: 0.25rem 0.5rem;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  color: hsl(209, 34%, 30%);
  
  flex: 1;
`

const SearchButton = styled.button`
  border-radius: 5px;
  border-color: transparent;
  padding: 0.25rem 0.5rem;
  font-size: 1.3rem;
  color: #fff;
  
  background: hsl(185, 62%, 45%);
  cursor: pointer;
`

const RequestsText = styled.h3`
  font-weight: 400;
  padding: 0 0.5rem;
  line-height: 1;
  font-size: 1.75rem;
  color: hsl(210, 22%, 49%);
`
