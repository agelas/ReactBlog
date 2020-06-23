import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Quill from "react-quill"
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
    state= {
        post: {
            id: this.props.post.id,
            slug: this.props.post.slug,
            title: this.props.post.title,
            content: this.props.post.content
        },
        saved: false
    };

    handlePostForm = e => {
        e.preventDefault();
        if (this.state.title) {
            const post = {
                title: this.state.title,
                content: this.state.content
            };
        this.props.addNewPost(post); //So PostForm is a child of App.js so this is allowed?
        this.setState({saved: true});
        } else {
            alert("Title Required");
        }
    };

    render() {
        if (this.state.saved === true) {
            return <Redirect to="/" />;
        }
        return(
            <form className="container" onSubmit = {this.handlePostForm}>
                <h1>Add a New Post</h1>
                    <p>
                        <label htmlFor="form-title">Title:</label>
                        <br />
                        <input
                            defaultValue={this.props.title}
                            id="form-title"
                            value={this.state.post.title}
                            onChange={e => this.setState({
                                post: {
                                    ...this.state.post,
                                    title: e.target.value
                                }
                            })}
                        />
                    </p>
                    <p>
                        <label htmlFor="form-content">Content:</label>
                    </p>
                    <Quill
                        defaultValue={this.state.post.content}
                        onChange={(content, delta, source, editor) => {
                            this.setState({
                                ...this.state.post, //some destructuring
                                content: editor.getContents() 
                            });
                        }}
                    />
                    <p>
                        <button type = "submit">Save</button>
                    </p>
            </form>
        );
    }
}

export default PostForm;