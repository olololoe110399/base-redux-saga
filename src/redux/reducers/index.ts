import { combineReducers } from 'redux'
import HomeReducer from './HomeReducer'

const allReducers = combineReducers({
  home: HomeReducer
})

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action)
}

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
