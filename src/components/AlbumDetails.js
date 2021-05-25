import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Media } from "reactstrap";

export const AlbumDetails = (props) => {
  const [selectedAlbum, setSelectedAlbum] = useState([
    {
      albumId: 0,
      id: 0,
      title: "",
      url: "",
      thumbnailUrl: 0,
    },
  ]);
  const albumId = props.match.params.id;

  useEffect(() => {
    async function fetchPost() {
      let album = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
      );
      album = await album.json();
      setSelectedAlbum(album);
      console.log("selectedAlbum", selectedAlbum)
    }
    fetchPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListGroup className="mt-4">
      {selectedAlbum.length > 0 ? (
        <>
          {selectedAlbum.slice(0, 5).map((photo) => (
            <ListGroupItem className="d-flex" key={photo.id}>
              <Media left middle href="#">
                <Media
                  object
                  src={`${photo.url}.jpg`}
                />
              </Media>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Photos</h4>
      )}
    </ListGroup>
  );
};
