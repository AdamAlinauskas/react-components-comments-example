import React, { Component } from "react";
import UserInfo from "./userInfo";
class Header extends Component {
  render() {
    console.log(this.props.user);
    return (
      <header>
        Buy product <UserInfo author={this.props.user} hideName={true} />
      </header>
    );
  }
}

export default Header;
