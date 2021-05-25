import React from 'react';

const AppContext = React.createContext({
    albums: [],
    posts: [],
    sortConfig: "",
    sortConfigPost: "",
    sortConfigAlbums: "",
    sortList: (list, sortedField) => { },});

export default AppContext;