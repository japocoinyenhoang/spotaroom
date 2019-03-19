import React, {Component,Fragment} from "react";
import PropTypes from 'prop-types';
import BtnMoreDetails from './BtnMoreDetails';
import '../stylesheets/RoomDetails.scss';

class RoomDetails extends Component {
  render() {
    const {photo, title, price, currency} = this.props;
    return (
      <Fragment>
        <img className="Room__img" src={photo} alt="bedroom"></img>
        <p className="Room__description">{title}</p>
        <p className="Room__price">{price} {currency}</p>
        <div className="Btn__container">
          <BtnMoreDetails />
          <button className="Btn Btn__book" type="button">Book Now!</button>
        </div>
      </Fragment>
    );
  }
}

RoomDetails.propTypes={
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default RoomDetails;
