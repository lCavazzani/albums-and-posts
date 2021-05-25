import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import AppContext from "../context/AppContext";

export const PostList = () => {
  const { posts, sortConfigPost, sortList } = useContext(AppContext);
  return (
    <>
      <h1 className="mt-3">Posts List</h1>
      <ListGroup className="mt-1">
        <Button
          onClick={() => sortList(posts.slice(0, 5), "posts")}
        >{`Sorting: ${sortConfigPost}`}</Button>
        {posts.length > 0 ? (
          <>
            {posts.slice(0, 5).map((post) => (
              <ListGroupItem className="d-flex" key={post.id}>
                <strong style={{ marginRight: "auto" }}>{post.title}</strong>
                <div className="ml-auto">
                  <Link
                    to={`/post/${post.id}`}
                    color="warning"
                    className="btn btn-warning"
                    style={{ width: 250 }}
                  >
                    Edit
                  </Link>
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
