import React, {useState} from 'react';
import Header from "./components/Header"
import Posts from "./components/Posts"
import Post from "./components/Post"
import NotFound from "./components/NotFound"
import Message from "./components/Message"
import PostForm from './components/PostForm';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null)

  const addNewPost = post => {
    post.id = posts.length + 1;
    post.slug = encodeURIComponent(
      post.title.toLowerCase().split(" ").join("-")
    ); 
    setPosts([...posts, post]);
    setMessage('saved') //Um hm
  };
  
  return(
    <Router>
      <div className="App">
      APP HERE
      <Header />
      {/*Causes Message component to render and receive the message type as props*/}
      {message && <Message type={message} />} 
      <Switch>
        <Route
        //Displays all posts we have
          exact
          path="/"
          render={ () => <Posts posts={posts}/> }
        />
        <Route
          path="/post/:postSlug" //Define the path to be loaded to Post component
          render={props => {
            const post = posts.find(post => post.slug === props.match.params.postSlug);
            //props.match.params.postSlug is method from React Router 
            if (post) 
              return <Post post = {post} />;
            else
              return <NotFound/>
          }}
        />
        <Route
          exact
          path="/new"
          render={ () => (
            <PostForm addNewPost={addNewPost} /> //So this is important idk why yet though
          )}
        />
        <Route component={NotFound} /> {/*Idk why yet but this HAS to be the last route*/}
        
      </Switch>
      </div>
    </Router>
  );
  
};
export default App;
