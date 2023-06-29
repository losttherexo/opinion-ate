import {combineReducers} from "redux"
import { STORE_RESTAURANTS } from "./actions"

function records(s = [], action) {
    switch (action.type) {
        case STORE_RESTAURANTS:
            return action.records
        default:
            return s
    }
}

export default combineReducers({
    records,
})