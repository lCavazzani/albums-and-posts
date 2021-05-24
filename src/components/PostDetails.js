import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const PostDetails = (props) => {
  const [selectedPost, setSelectedPost] = useState({
    id: 0,
    title: '',
    body: '',
    userId: 0,
  })
  const history = useHistory();
  const postId = props.match.params.id;

  useEffect(() => {
    async function fetchPost() {
        let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        post = await post.json()
        setSelectedPost(post)
      }
      fetchPost();
  }, [postId, selectedPost])

  const onChange = (e) => {
    setSelectedPost({ ...selectedPost, [e.target.title]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // editUser(selectedPost);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" value={selectedPost.title} onChange={onChange} name="title" placeholder="Enter title" required></Input>
        <Label>Body</Label>
        <Input type="text" value={selectedPost.body} onChange={onChange} name="title" placeholder="Enter title" required></Input>
      </FormGroup>
      <Button type="submit">Edit Post</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}