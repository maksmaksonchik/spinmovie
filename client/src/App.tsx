import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import WheelLayout from './components/WheelLayout/WheelLayout';
import Tabs from './components/Tabs/Tabs';
import Collections from './components/Collections/Collections';
import Footer from './components/Footer/Footer';
import { userApi } from './services/userApi/userApi';
import { movieApi } from './services/movieApi/movieApi';
import { collectionApi } from './services/collectionApi/collectionsApi';
import { useAppSelector } from './hooks/redux';

const App = () => {
  userApi.useCheckQuery();
  movieApi.useFetchTopTenQuery();
  collectionApi.useFetchTeamCollectionsQuery();
  const {refetch} = collectionApi.useFetchUserCollectiosQuery();

  const {user} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    refetch()
  }, [user, refetch])

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
