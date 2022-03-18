import "./App.css";
import { connect } from "react-redux";
import { deletePost } from "./postsDucks";
import { deleteTodo } from "./todosDucks";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={() => props.deletePost(1)}> delete Post</button>
      <button onClick={() => props.deleteTodo(1)}> delete todo</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    todos: state.todosReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
