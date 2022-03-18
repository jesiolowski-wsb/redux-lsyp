import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return <div className="App"></div>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.find((post) => post.id === ownProps.postId),
  };
};

export default connect(mapStateToProps)(App);
