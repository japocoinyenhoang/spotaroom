import React, {Component} from "react";
import '../stylesheets/MenuLink.scss';

class MenuLink extends Component {
  render() {
    return (
      <nav className="Menu__link">
        <a href="https://www.spotahome.com/" target="_blank" className="Menu__link--item">The company</a>
        <a href="https://www.spotahome.com/how-it-works" target="_blank" className="Menu__link--item">How we work</a>
        <a href="https://www.spotahome.com/contact-us" target="_blank" className="Menu__link--item">Contact us</a>
    </nav>
    );
  }
}

export default MenuLink;
