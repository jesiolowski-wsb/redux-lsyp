import { takeLatest } from "redux-saga/effects";
import { DELETE_POST } from "./postsDucks";

function* askForMore() {
  yield fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default function* bootstrap() {
  yield takeLatest(DELETE_POST, askForMore);
}
