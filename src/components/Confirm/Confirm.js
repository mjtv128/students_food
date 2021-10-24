import React, {useEffect } from "react";
import {Title, OrderNo, QR, PickUpTime, Summary, Table} from './StyledConfirm';
import { QRCode } from "react-qr-svg";


const Confirm = (props) => {
  var today = new Date();
  const {reserve} = props;

  // console.log('reserve PROPS', reserve)

  let minutes = today.getMinutes() ;
  console.log('minute', minutes)
  let hours = today.getHours() + 1;

  // if (minutes >= 60){
  //   minutes = minutes%60
  //   hours+= 1
  // }

  const pickUpTime = hours + ':' + minutes;


  return (
    <>
      <Title>Thank you!</Title>
      <OrderNo>#{Math.floor(Math.random() * 200)}</OrderNo>
      <QR>
        <QRCode
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="Q"
          style={{ width: 150 }}
          value="Duke Broadhead Center"
        />
      </QR>
      <PickUpTime>
        Please pick up before: {pickUpTime}
        {hours < 12 ? " AM" : " PM"}
      </PickUpTime>
      <Summary>
        {`You Ordered: ` + reserve.join(", ")}
      </Summary>
    </>
  );
}

export default Confirm;