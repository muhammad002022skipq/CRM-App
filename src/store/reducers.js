import { combineReducers } from "redux";
import customers from "../features/customer/reducers";

const rootReducer = combineReducers({
    customers,
});

export default rootReducer;
