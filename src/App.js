import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Confirm from "./components/Confirm/Confirm";
import Logo from './logo_duke_zero_waste.png'

function App() {
  const [reserve, setReserve] = useState([]);

  const onClickItem = (item) => {
    setReserve(reserve => [...reserve,item])
  }

  console.log('reserve', reserve)
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">Our Bazaar</div>
        <div className="line" />
      </header>
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              component={() => (
                <Home reserve={reserve} onClickItem={onClickItem} />
              )}
              exact
            />
            <Route
              path="/confirm"
              component={() => <Confirm reserve={reserve} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
      <br />
      {/* <div className='image'> */}
        <img width='100%' src={Logo} />
      {/* </div> */}
    </div>
  );
}

export default App;
