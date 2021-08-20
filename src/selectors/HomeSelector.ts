import { AppState } from 'redux/reducers'

export const homeSelector = (state: AppState) => ({ count: state.home.count })
