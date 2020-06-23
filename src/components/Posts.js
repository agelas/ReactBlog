import React from "react"
import {Link} from "react-router-dom";
/*
    Functional component that destructures posts from props.
*/

const Posts = ({posts}) => (
    <article className="posts container">
        <h1>Posts</h1>
        <ul>
            {posts.length < 1 && ( <li key="empty">No Posts yet</li>
            )}
            {posts.map(post => (
                <li key = {post.id}>
                    <h2>
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>
                        <Link to={`/edit/${post.slug}`}>Edit</Link>
                    </p>
                </li>
            ))}
        </ul>
    </article>
);

export default Posts