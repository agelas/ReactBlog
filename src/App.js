import React, {Component} from 'react';
import Header from "./components/Header"
import Posts from "./components/Posts"
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Hello World",
        content:"Oof."
      },
      {
        id: 2,
        title: "Hello There",
        content: "ha"
      },
      {
        id: 3,
        title: "Dear Diary",
        content: "I am suffering."
      }
    ]
  }

  render() {
    return(
      <div className="App">
      APP HERE
      <Header />
      <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
