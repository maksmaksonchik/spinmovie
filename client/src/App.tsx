import React from 'react';

import Header from './components/Header/Header';
import Wheel from './components/Wheel/Wheel';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {

  return (
    <>
      <Header />
      <Wrapper>
        <Wheel />
      </Wrapper>

    </>
  )
}

export default App;
