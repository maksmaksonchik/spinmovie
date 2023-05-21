import React from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import WheelLayout from './components/WheelLayout/WheelLayout';
import Tabs from './components/Tabs/Tabs';
import Collections from './components/Collections/Collections';
import Footer from './components/Footer/Footer';
import { userApi } from './services/userApi/userApi';

const App = () => {
  userApi.useCheckQuery();
  return (
    <>
      <Header />
      <Wrapper>
        <WheelLayout />
        <Tabs
          tabNames={['От редакциии', 'Мои подборки']}
          tabComponents={[
            <Collections type='team' />,
            <Collections type='user' />
          ]}
        />
      </Wrapper>
      <Footer />
    </>
  )
}

export default App;
