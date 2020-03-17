import React, { Component } from "react";
import UserInfo from "./userInfo";
import CommentText, { validateComment } from "./commentText";

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo author={this.props.author} />
        <CommentText text={this.props.text} date={this.props.date} />
      </div>
    );
  }
}

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           style={{ width: "100px" }}
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{props.date}</div>
//     </div>
//   );
// }

export default Comment;
