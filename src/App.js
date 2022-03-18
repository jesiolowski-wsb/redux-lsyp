import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={() => props.deletePost(1)}> delete Post</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
