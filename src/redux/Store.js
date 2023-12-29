import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { vandor_sinupaction } from "./Action/Useraction";
import {
  category_reducer,
  themes_reducer,
  userreducer,
} from "./Reducer/UserReducer";
const reducer = combineReducers({
  user: userreducer,
  vandor: vandor_sinupaction,
  category: category_reducer,
  themlist: themes_reducer,
});

let middleware = [thunk];
let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
