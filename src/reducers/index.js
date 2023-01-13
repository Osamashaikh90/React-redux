import changeTheNumber from "./incDec";
import changeNumber from "./mulDec";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    changeNumber
})

export default rootReducer;