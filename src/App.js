import "./App.css";
import { connect } from "react-redux";
import { deletePost } from "./postsDucks";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={() => props.deletePost(1)}> delete Post</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
