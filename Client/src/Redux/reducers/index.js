import { combineReducers } from "redux";
import FormAction from "./FormAction";
import FormUpdate from "./FormUpdate";
const rootReducer = combineReducers({
  FormAction,
  FormUpdate,
});
export default rootReducer;
