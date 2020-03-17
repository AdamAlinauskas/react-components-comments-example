import React, { Component } from "react";

class CommentText extends Component {
  render() {
    return (
      <div>
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">{this.props.date}</div>
      </div>
    );
  }
}

export function validateComment(commentText) {
  if (commentText.length > 0) {
    return true;
  } else {
    return false;
  }
}

export default CommentText;
