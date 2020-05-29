import React from 'react';

import GlobalStyle from './Components/shared/GlobalStyle';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Featured from './Components/Featured';
import Projects from './Components/Projects'
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <GlobalStyle />
      <Header />  
      <Intro />
      <About />
      <Featured />
      <Projects />
      <Contact />
      <Footer />
      
      </>
  );
}

export default App;
