import React from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import WheelLayout from './components/WheelLayout/WheelLayout';

const App = () => {

  return (
    <>
      <Header />
      <Wrapper>
        <WheelLayout />
      </Wrapper>

    </>
  )
}

export default App;
