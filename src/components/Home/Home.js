import React from 'react';
import Info from '../info/info';
import Table from '../Table/table';
import {Wrapper} from './StyledHome'

const Home = (props) => {

  return (
    <>
      <Wrapper className='Wrapper'>
        <Info />
        <Table reserve1={props.reserve} onClickItem={props.onClickItem} />
      </Wrapper>
    </>
  );
}

export default Home