import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import SearchDashBoard from './pages/SearchDashBoard'

const InitialStyle = createGlobalStyle`
  ${reset};
  html, body, #root {
    height: 100%;
  }
  body {
    background: #f1f1f1;
    font-size: 1rem;
  }
  a {
    color: inherit;
    text-decoration: none; 
  }
  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <InitialStyle />
      <SearchDashBoard />
    </React.Suspense>
  );
}

export default App;
