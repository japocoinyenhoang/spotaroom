import React, {Component} from "react";
import RoomDetails from './RoomDetails';
import '../stylesheets/RoomList.scss';

class RoomList extends Component {
  render() {
    const {rooms}=this.props;
    return (
      <ul className="ResultList__container">
          {rooms.map(item =>{
            return(
              <li className="ResultList__item" key={item.id}>
                <RoomDetails
                  photo={item.photoUrls.homecardHidpi}
                  title={item.title}
                  price={item.pricePerMonth}
                 currency={item.currencySymbol}
                />
              </li>
            )
          })}
          </ul>
    );
  }
}

export default RoomList;
