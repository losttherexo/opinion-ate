import {combineReducers} from "redux"
import { STORE_RESTAURANTS, START_LOADING } from "./actions"

function records(s = [], action) {
    switch (action.type) {
        case STORE_RESTAURANTS:
            return action.records
        default:
            return s
    }
}

function loading(state = false, action) {
    switch (action.type) {
        case START_LOADING:
            return true
        case STORE_RESTAURANTS:
            return false
        default:
            return state
    }
}

export default combineReducers({
    records, loading
})