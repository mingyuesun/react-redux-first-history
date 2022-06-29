import { createBrowserHistory } from 'history'
import { createReduxHistoryContext } from 'redux-first-history'

const history = createBrowserHistory()
const { routerReducer, routerMiddleware, createReduxHistory } = createReduxHistoryContext({history})

export {
	routerReducer,   // 这是一个将要被合并的 reducer，未来，用来把路径信息放入 store 中
	routerMiddleware,   // 中间件，用来接收动作，跳转路径
	createReduxHistory  // 创建历史对象用的
}