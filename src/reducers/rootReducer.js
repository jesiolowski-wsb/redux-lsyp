const initState = {
  posts: [
    { id: 1, title: "title 1", body: "Lorem ipsum..." },
    { id: 2, title: "title 2", body: "Lorem ipsum..." },
    { id: 3, title: "title 3", body: "Lorem ipsum..." },
    { id: 4, title: "title 4", body: "Lorem ipsum..." },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    const newPosts = state.posts.filter((p) => p.id !== action.id);
    return { ...state, posts: newPosts };
  }
  return state;
};

export default rootReducer;
