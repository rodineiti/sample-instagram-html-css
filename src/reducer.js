import { SET_LIKE } from "./actionTypes";

const stories = [
  {
    id: 1,
    name: "Nome",
    thumb: "img/profiles/yoda/yoda-profile.jpg",
    active: false,
  },
  {
    id: 2,
    name: "Gamora",
    thumb: "img/profiles/gamora/gamora-profile.jpg",
    active: true,
  },
];

const posts = [
  {
    id: 1,
    user: "Nome",
    user_thumb: "img/profiles/yoda/yoda-profile.jpg",
    image: "img/profiles/yoda/yoda-1.jpg",
    likes_count: 7,
    like_show: {
      name: "Domino",
      thumb: "img/profiles/domino/domino-profile.jpg",
    },
    liked: true,
  },
  {
    id: 2,
    user: "Nome",
    user_thumb: "img/profiles/gamora/gamora-profile.jpg",
    image: "img/profiles/gamora/gamora-1.jpg",
    likes_count: 7,
    like_show: {
      name: "Carol",
      thumb: "img/profiles/carol/carol-profile.jpg",
    },
    liked: true,
  },
];

const initialState = {
  stories,
  posts: JSON.parse(window.localStorage.getItem("posts")) || posts,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIKE:
      const newPosts = state.posts.map((post) => {
        if (post.id === payload) {
          return {
            ...post,
            liked: !post.liked,
          };
        }
        return post;
      });
      window.localStorage.setItem("posts", JSON.stringify(newPosts));
      return { ...state, posts: newPosts };
    default:
      return state;
  }
};
