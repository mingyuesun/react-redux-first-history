import { createRouterMiddleware } from './middleware'
import { locationChangeAction } from './actions'
import { createRouterReducer } from './reducer'

/**
 * 创建 redux 版本的 history 上下文
 * @param {*} history 原始的 history 对象
 */
export function createReduxHistoryContext({ history }) {
	const routerMiddleware = createRouterMiddleware(history)
	const routerReducer = createRouterReducer(history)
	function createReduxHistory(store) {
		store.dispatch(locationChangeAction(history.location, history.action))
		// 订阅路径变化事件，当路径发生变化后，重新派发动作给 store，重新保存路径
		history.listen(({location, action}) => {
			store.dispatch(locationChangeAction(location, action))
		})
		return {
			...history
		}
	}
	return {
		routerMiddleware,
		routerReducer,
		createReduxHistory
	}
}