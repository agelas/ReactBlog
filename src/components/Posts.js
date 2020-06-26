import React from "react"
import {Link} from "react-router-dom";
/*
    Functional component that destructures posts from props.
*/

const Posts = ({posts, deletePost}) => (
    <article className="posts container">
        <h1>Posts</h1>
        <ul>
            {/*If no posts yet*/}
            {posts.length < 1 && ( <li key="empty">No Posts yet</li>
            )} 
            {/*Display all posts*/}
            {posts.map(post => (
                <li key = {post.id}>
                    <h2>
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>
                        <Link to={`/edit/${post.slug}`}>Edit</Link>
                        {" | "}
                        <button
                            className="linkLike" //React doesn't like links that don't go anywhere,
                                                //so just using a button that is styled like a link using CSS
                            onClick= { () => deletePost(post)}
                        >
                        Delete
                        </button>
                    </p>
                </li>
            ))}
        </ul>
    </article>
);

export default Posts