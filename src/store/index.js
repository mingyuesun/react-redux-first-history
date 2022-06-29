import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { routerMiddleware, createReduxHistory } from './history'

export const store = applyMiddleware(routerMiddleware)(createStore)(rootReducer)
window.store = store
export const history = createReduxHistory(store)