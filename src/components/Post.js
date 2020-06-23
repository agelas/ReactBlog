/*
Handles loading a single post view
*/
import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Post = ({post}) => {
    const converter = new QuillDeltaToHtmlConverter(
        post.content.ops,
        {}
    );
    const contentHTML = converter.convert();
    
    return (
        <article className="post container">
            <h1>{post.title}</h1>
            <div
                className="content"
                dangerouslySetInnerHTML={{__html: contentHTML
                }} //Letting raw HTML run on the page can be an oof
            />
        </article>
    );
};

export default Post;