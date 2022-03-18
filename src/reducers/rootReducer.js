const initState = {
  posts: [
    { id: 1, title: "title 1", body: "Lorem ipsum..." },
    { id: 2, title: "title 2", body: "Lorem ipsum..." },
    { id: 3, title: "title 3", body: "Lorem ipsum..." },
    { id: 4, title: "title 4", body: "Lorem ipsum..." },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
