import React, { Component } from 'react';
import './App.css';
const ENDPOINT='https://frontend-interview.spotahome.com/api/homecards';
class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      rooms :[]
    }
    this.getRoomResult();
  };

  getRoomResult(){
    fetch(ENDPOINT)
    .then(response=> response.json())
    .then(data =>{
      console.log(data);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="Header__container">
        <h1 className="Header__title">spotahome</h1>
        <ul className="Menu__link">
          <li className="Menu__link--item">The company</li>
          <li className="Menu__link--item">How we work</li>
          <li className="Menu__link--item">Contact us</li>
        </ul>
        </header>
        <main className="Main__container">
          <ul className="ResultList__container">
            <li className="ResultList__item">
              <img className="Room__img" src="" alt=""></img>
              <p className="Room__description"></p>
              <p className="Room__price"></p>
              <button className="Room__moreDetails" type="button">More Details</button>
              <button className="Room__book" type="button">Book Now!</button>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
