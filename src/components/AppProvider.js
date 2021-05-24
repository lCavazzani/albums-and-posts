import React, { useState, useEffect } from "react";
import AppContext from "../context/AppContext";

const AppProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function fetchAlbums() {
      let albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      albums = await albums.json()
      setAlbums(albums)
    }
    async function fetchPosts() {
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts = await posts.json()
        setPosts(posts)
      }
      fetchPosts()
      fetchAlbums()
  }, [])
  return (
    <AppContext.Provider
      value={{albums, posts}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
