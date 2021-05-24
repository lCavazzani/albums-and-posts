import React from "react";
import { AlbumList } from "./AlbumList";
import { PostList } from "./PostList";
import AppProvider from "./AppProvider";

export const Home = () => {
  return (
    <div>
      <AppProvider>
        <AlbumList />
        <PostList />
      </AppProvider>
    </div>
  );
};
