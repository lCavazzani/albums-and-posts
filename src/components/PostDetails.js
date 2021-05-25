import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label } from "reactstrap";

export const PostDetails = (props) => {
  const [selectedPost, setSelectedPost] = useState({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });
  const history = useHistory();
  const postId = props.match.params.id;

  useEffect(() => {
    async function fetchPost() {
      let post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = await post.json();
      setSelectedPost(post);
    }
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // Add the edit functionality, do a PUT call to api with form data
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <div>
        <h3>Title</h3>
        <Label>{selectedPost.title}</Label>
        </div>
        <div>
        <h3>Body</h3>
        <Label>{selectedPost.body}</Label>
        </div>
      </FormGroup>
      {/* <Button type="submit">Edit Post</Button> */}
      <Link to="/home" className="btn ml-2">
        Back
      </Link>
    </Form>
  );
};
