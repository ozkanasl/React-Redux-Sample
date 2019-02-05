import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import homeReducer from "./redux/Home.reducer";


const rootReducer = (history) =>
  combineReducers({
    home: homeReducer,
    router: connectRouter(history)
  });



export default rootReducer;
