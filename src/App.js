import React, {useState} from 'react';
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import Message from "./components/Message";
import PostForm from './components/PostForm';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null)

  const addNewPost = (post) => {
    post.id = posts.length + 1;
    post.slug = getNewSlugFromTitle(post.title);
    setPosts([...posts, post]);
    setMessage('saved') //Um hm //ok this works what is wrong with javascript
    setTimeout( () => {
      setMessage(null)
    }, 1600);
  };

  const getNewSlugFromTitle = (title) =>
    encodeURIComponent(title.toLowerCase().split(" ").join("-"));

  const updatePost = (post) => {
    post.slug = getNewSlugFromTitle(post.title)
    const index = posts.findIndex((p) => p.id === post.id); //Find index for 1st post with same slug as one passed in the URL
    const oldPosts = posts.slice(0, index).concat(posts.slice(index + 1)); //Use index to remove post that was just edited from list of posts, then add new post back
    const updatedPosts = [...oldPosts, post].sort((a, b) => a.id - b.id); //Sort posts based on ID so they are in same order as before
    setPosts(updatedPosts);
    setMessage(`updated`)
    setTimeout( () => {
      setMessage(null)
    }, 1600);
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
            if (post) {
              return <Post post = {post} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/new"
          render={ () => (
            <PostForm addNewPost={addNewPost}
              post = {{ //Pass in an empty post object into PostForm so it always expects a post to edit
                id: 0,
                slug: "",
                title: "",
                content: ""
              }}
            /> //So this is important for the whole props thing idk why yet though
          )}
        />
        <Route
            path="/edit/:postSlug"
            render={(props) => {
              const post = posts.find(
                (post) => post.slug === props.match.params.postSlug
              );
              if (post) {
                return <PostForm updatePost={updatePost} post={post} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
        />
        <Route component={NotFound} /> {/*Idk why yet but this HAS to be the last route*/}
        
      </Switch>
      </div>
    </Router>
  );
  
};
export default App;
