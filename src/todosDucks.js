// actions
export const DELETE_TODO = "todos/DELETE_TODOS";

const initState = {
  todos: [
    { id: 1, title: "title asfasfas1", body: "Lorem ipsum..." },
    { id: 2, title: "titlasdasde 2", body: "Lorem ipsum..." },
    { id: 3, title: "asdasd 3", body: "Lorem ipsum..." },
    { id: 4, title: "title asdasd4", body: "Lorem ipsum..." },
  ],
};

// reducer
const todosReducer = (state = initState, action) => {
  if (action.type === DELETE_TODO) {
    const newTodos = state.todos.filter((t) => t.id !== action.id);
    return { ...state, todos: newTodos };
  }
  return state;
};

// action creators
export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

export default todosReducer;
