import React, {Component} from 'react';
import Header from "./components/Header"
import Posts from "./components/Posts"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        slug: "hello-world",
        title: "Hello World",
        content:"Oof."
      },
      {
        id: 2,
        slug:"hello-there",
        title: "Hello There",
        content: "ha"
      },
      {
        id: 3,
        slug: "hello-diary",
        title: "Dear Diary",
        content: "I am suffering."
      }
    ]
  }

  render() {
    return(
      <Router>
        <div className="App">
        APP HERE
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Posts posts={this.state.posts} />}
          />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
