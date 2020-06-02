import React from "react";

import Post from "./components/Post";
import Stories from "./components/Stories";
import Header from "./components/Header";

import { useSelector, useDispatch } from "react-redux";
import { setLike } from "./actions";

function App() {
  const { stories, posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickLike = (id) => {
    dispatch(setLike(id));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Stories stories={stories} />
        {posts.map((post, key) => (
          <Post key={key} post={post} handleClickLike={handleClickLike} />
        ))}
      </div>
    </div>
  );
}

export default App;
