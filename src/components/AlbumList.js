import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import AppContext from "../context/AppContext";

export const AlbumList = () => {
  const { albums, sortList, sortConfigAlbums } = useContext(AppContext);

  return (
    <>
      <h1  className="mt-3">Albums List</h1>
      <ListGroup className="mt-1">
        <Button
          onClick={() => sortList(albums.slice(0, 5), "albums")}
        >{`Sorting: ${sortConfigAlbums}`}</Button>
        {albums.length > 0 ? (
          <>
            {albums.slice(0, 5).map((album) => (
              <ListGroupItem className="d-flex" key={album.id}>
                <strong style={{ marginRight: "auto" }}>{album.title}</strong>
                <div className="ml-auto">
                  <Link
                    to={`/albums/${album.id}`}
                    color="warning"
                    className="btn btn-warning"
                    style={{ width: 250 }}
                  >
                    View
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
