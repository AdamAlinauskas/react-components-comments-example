import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/comment";
import Header from "./components/Header";

let author = {
  name: "Garfield",
  avatarUrl:
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png"
};

let author2 = {
  name: "Bruce Banner",
  avatarUrl:
    "https://cdn.vox-cdn.com/thumbor/Sw2sU7h22A4cINOH1-r_o9tbGoI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9438053/hulk_agnarok.jpg"
};

let author3 = {
  name: "Peter Parker",
  avatarUrl:
    "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg"
};

class ProductComment {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
}

let comments = [
  new ProductComment(author, "This thing sucks", "June 25 2020"),
  new ProductComment(author2, "This thing is great", "December 25 2020"),
  new ProductComment(author3, "Best city", "December 25 2020")
];

function App() {
  return (
    <div className="App">
      <Header user={author2} />

      {comments.map(comment => (
        <Comment
          author={comment.author}
          text={comment.text}
          date={comment.date}
        />
      ))}
    </div>
  );
}

export default App;
