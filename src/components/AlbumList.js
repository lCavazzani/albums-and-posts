import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import AppContext from "../context/AppContext";

export const AlbumList = () => {
  const { albums } = useContext(AppContext);

  return (
    <>
      <h1>Albums List</h1>
      <ListGroup className="mt-4">
        {albums.length > 0 ? (
          <>
            {albums.slice(0, 5).map((album) => (
              <ListGroupItem className="d-flex" key={album.id}>
                <strong style={{ marginRight: 200 }}>{album.title}</strong>
                <div className="ml-auto">
                  <Link
                    to={`/albums/${album.id}`}
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
