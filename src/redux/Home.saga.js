import { put, call, fork, takeEvery, take, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import axios from "axios";
import _ from "lodash";

import { store } from "../App";
import * as homeActions from "./Home.actions";
import HOME from "./Home.constants";


function* getPrograms() {
  try {
    const { data } = yield call(axios.get, "http://localhost:3000/entries");

    const defaultValue = {
      SeriesFilteredData: [],
      MoviesFilteredData: []
    };
    const reducerFunction = (accumulator, currentValue) => {

      if (currentValue.releaseYear < 2010) {
        return accumulator;
      }
      if (currentValue.programType === "series") {
        accumulator.SeriesFilteredData.push(currentValue);
      }
      else if (currentValue.programType === "movie") {
        accumulator.MoviesFilteredData.push(currentValue);
      }
      return accumulator;
    };

    const results = data.reduce(reducerFunction, defaultValue);

    if (results) {
      yield put(homeActions.getProgramsFinish(results));
    }
    else {
      throw new Error("No results");
    }
  }
  catch {

    yield put(homeActions.getProgramsRejected({ fetching: false }));

  }


}
function* homeFlow() {
  console.log(getPrograms, "getPrograms");

  // 2 second delay for loading screen
  yield call(delay, 2000);
  yield call(getPrograms);
}

export default function* homeSaga() {
  yield takeEvery(HOME.GET_MOVIES_START, homeFlow);
}
