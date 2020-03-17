import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    console.log("" + this.props.hideName);

    let nameHtml = (
      <div className="UserInfo-name">{this.props.author.name}</div>
    );

    if (this.props.hideName == true) nameHtml = "";

    return (
      <div className="UserInfo">
        <img
          style={{ width: "100px" }}
          className="Avatar"
          src={this.props.author.avatarUrl}
          alt={this.props.author.name}
        />
        {nameHtml}
      </div>
    );
  }
}

export default UserInfo;
