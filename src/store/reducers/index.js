import { combineReducers } from "redux";

import course from "./course";
import ui from "./ui";

export default combineReducers({
    course,
    ui,
})