// 调用 history 对象的方法
export const CALL_HISTORY_METHOD = "@@router/CALL_HISTORY_METHOD"
// 当路径变更后会派发这个动作给 store，让 store 中的 reducer 把最新的路径放入 store 的 state 中
export const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"

export function locationChangeAction(location, action) {
  return {
    type: LOCATION_CHANGE,
    payload: { action, location }
  }
}

function updateLocation(method) {
  return (...args) => {
    return {
      type: CALL_HISTORY_METHOD,
      payload: { method, args }
    }
  }
}

export const push = updateLocation("push")
