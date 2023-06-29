import {legacy_createStore} from 'redux'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import api from '../api'

const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
)

export default store