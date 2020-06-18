import React from "react"
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
                    <h2>{post.title}</h2>
                </li>
            ))}
        </ul>
    </article>
);

export default Posts