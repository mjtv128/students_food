import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { ButtonWrapper, TableWrapper, Item, Availability, Plus, Wrapper, ItemWrapper, Counter } from "./StyledTable";
import image from './icons8-plus-+-30.png';
import { useHistory } from "react-router-dom";
import tickImage from './527-5272841_green-tick-icon-green-tick-png-clipart.png'

const Table = (props) => {
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [tick, setTick] = useState(false)
  const axios = require("axios");
  const [results, setResults] = useState(null)
  const url = "https://food-waste-329921.uc.r.appspot.com/gettable";


  let counter = 0
  let availability = 10

  const handlePlusClick = () => {
    if (count <= availability - 1){
      setCount((count) => count + 1);
    }
  }

  const handleMinusClick = () => {
    if (count >= 1){
      setCount(count => count - 1);
    }
  };

  const handleTick = () => {
    return tick == true? <img width='20px' src={tickImage}/> : <img width='20px' src={image} />
  }


  const data = [
    {
      item: "Cucumber",
      available: 10,
    },
    {
      item: "Potatoes",
      available: 20,
    },
    {
      item: "Bread",
      available: 220,
    },
    {
      item: "Ham",
      available:'9',
    },
    {
      item: "Mushroom",
      available: 200,
    },
    {
      item: "Gummies",
      available: 43,
    },
    {
      item: "Chips",
      available: 10,
    },
  ];

   const routeChange = () => {
     history.push('/confirm');
   };

   const handleClick = (item) => {
    //  props.onClickItem(item);
     setTick(!tick);
   }
  
  const getData = async() => {
    const res = await axios.get(url)
    setResults(res)
  }
    
  // getData()
  
  useEffect(() => {
    // Update the document title using   the browser API
    console.log('hi');
    getData();
  }, []);
  
  // console.log('RESULTS', results.data.message)

  // console.log('res', results.data.message)
  // let messages;
  // if (results){
  //   const { message } = results.data; 
  //   messages = message;

  // }

  const{message} = results.data
  // console.log('me', message)
  return (
    <>
      <ButtonWrapper onClick={() => routeChange()}>Reserve</ButtonWrapper>
      <div className="reserve"></div>
      <div />
      <TableWrapper>
        <Wrapper>
          <div className="Item-header"> Item</div>
          <div className="Available-header"> Available</div>
        </Wrapper>
        <hr />
        {message.map((item) => (
          <>
            <ItemWrapper>
              <Item>{item.ingredient}</Item>
              <Availability>{item.qtywasted*100}</Availability>
              <div onClick={() => {
                setTick(!tick);
                
              }}>
                <Plus
                  onClick={() => {
                    props.onClickItem(item.item);
                    // setTick(!tick);
                  }}
                >
                  {handleTick()}
                </Plus>
              </div>
            </ItemWrapper>
          </>
        ))}
      </TableWrapper>
    </>
  );
};


export default Table;
