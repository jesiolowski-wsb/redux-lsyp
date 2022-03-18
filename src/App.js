import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return <div className="App"></div>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);
