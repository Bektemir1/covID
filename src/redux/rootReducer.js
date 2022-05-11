import statisticsReducers from "./statistics-reducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    statistics: statisticsReducers
})
export default rootReducer;