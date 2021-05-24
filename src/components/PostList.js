import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import AppContext from "../context/AppContext";

export const PostList = () => {
  const { posts } = useContext(AppContext);
  return (
    <>
      <h1>Posts List</h1>
      <ListGroup className="mt-4">
        {posts.length > 0 ? (
          <>
            {posts.slice(0, 5).map((post) => (
              <ListGroupItem className="d-flex" key={post.id}>
                <strong style={{ marginRight: 200 }}>{post.title}</strong>
                <div className="ml-auto">
                  <Link
                    to={`/post/${post.id}`}
                    color="warning"
                    className="btn btn-warning mr-1"
                  >
                    Edit
                  </Link>
                  <Button color="danger">Delete</Button>
                </div>
              </ListGroupItem>
            ))}
          </>
        ) : (
          <h4 className="text-center">No Albums</h4>
        )}
      </ListGroup>
    </>
  );
};
