import React, { useState, useEffect } from "react";
import AppContext from "../context/AppContext";

const AppProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);
  const [sortConfig, setSortConfig] = useState("desc");
  const [sortConfigPost, setSortConfigPost] = useState("desc");
  const [sortConfigAlbums, setSortConfigAlbums] = useState("desc");

  const sortList = (list, type) => {
    let sortedList = [...list];
    sortedList.sort((a, b) => {
      if (a.title < b.title) {
        return sortConfig === "asc" ? -1 : 1;
      }
      if (a.title > b.title) {
        return sortConfig === "asc" ? 1 : -1;
      }
      return 0;
    });
    setSortConfig(sortConfig === "asc" ? "desc" : "asc");
    if (type === "albums") {
      setAlbums(sortedList);
      setSortConfigAlbums(sortConfigAlbums === "asc" ? "desc" : "asc");
    }
    if (type === "posts") {
      setPosts(sortedList);
      setSortConfigPost(sortConfigPost === "asc" ? "desc" : "asc");
    }
  };

  useEffect(() => {
    async function fetchAlbums() {
      let albums = await fetch("https://jsonplaceholder.typicode.com/albums");
      albums = await albums.json();
      setAlbums(albums);
    }
    async function fetchPosts() {
      let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts = await posts.json();
      setPosts(posts);
    }
    fetchPosts();
    fetchAlbums();
  }, []);
  return (
    <AppContext.Provider
      value={{
        albums,
        posts,
        sortList,
        sortConfig,
        sortConfigPost,
        sortConfigAlbums,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
