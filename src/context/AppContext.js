import React from 'react';

const AppContext = React.createContext({
    albums: [],
    posts: []
});

export default AppContext;