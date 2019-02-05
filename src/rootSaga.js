import { fork } from "redux-saga/effects";



import homeSaga from "./redux/Home.saga";

export default function* rootSaga() {
  yield fork(homeSaga);
}
