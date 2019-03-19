import React, { Component } from 'react';
import {getRooms} from './services/RoomApiService';
import MenuLink from './components/MenuLink';
import RoomList from './components/RoomList';
import ScrollArea from 'react-scrollbar';
import './App.scss';
class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      rooms :[]
    }
    this.getRoomResult();
  };

  getRoomResult(){
    getRooms()
    .then(data =>{
      const newData =data.homecards.map ((item, index) =>{return {...item, id:index}});
      this.setState({
        rooms: newData
      })
    });
  }
  render() {
    return (
      <div className="Wrap App">
        <header className="Header__container">
        <h1 className="Header__title">spotaroom</h1>
          <MenuLink />
        </header>
        <main className="Main__container">
          <ScrollArea>
           <RoomList rooms={this.state.rooms}/>
          </ScrollArea>
        </main>
      </div>
    );
  }
}

export default App;
