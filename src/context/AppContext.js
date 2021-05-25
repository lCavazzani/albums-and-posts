import React from "react";

const AppContext = React.createContext({
  albums: [],
  posts: [],
  sortConfig: "",
  sortConfigPost: "",
  sortConfigAlbums: "",
  sortList: (list, sortedField) => {},
});

export default AppContext;

// Define context that is going to be used by application. Can be splited in multiple contexts such as albumsContext, postsContext...
