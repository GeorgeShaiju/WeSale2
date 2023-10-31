
import './App.css'

import React from 'react';
import Header from './compnents/header';
import Footer from './compnents/footer';
import MidText from './compnents/midh';
import Mylogin from './pages/login';
import Display from './pages/display'

function App() {
  return (
    <div>
      {/* <Header/>
      <MidText/> 
      <Footer/> */}
      <Mylogin/>
      {/* <Display/> */}
      {/* Add the rest of your content below the header */}
    </div>
  );
}

export default App;
