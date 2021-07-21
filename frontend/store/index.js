import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import homeReducer from './reducers/homeReducer'

const rootReducer = combineReducers({
  home: homeReducer
})

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);