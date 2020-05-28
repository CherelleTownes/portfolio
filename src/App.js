import React from 'react';

import GlobalStyle from './Components/shared/GlobalStyle';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Featured from './Components/Featured';


function App() {
  return (
    <>
    <GlobalStyle />
      <Header />  
      <Intro />
      <About />
      <Featured />

      
      </>
  );
}

export default App;
