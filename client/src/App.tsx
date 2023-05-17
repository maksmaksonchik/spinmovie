import React, { useEffect } from 'react';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import WheelLayout from './components/WheelLayout/WheelLayout';
import { useAppDispatch } from './hooks/redux';
import { fetchMovieList } from './store/redusers/ActionCreators';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieList())
  }, [dispatch]); // TODO: настроить линтер и поменять на пустой массив

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
