import {
  HomeActionType,
  HomeActionTypes,
  HomeState
} from 'redux/types/HomeTypes'

const initialState: HomeState = {
  count: 0
}

const countReducer = (state = initialState, action: HomeActionType) => {
  switch (action.type) {
    case HomeActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case HomeActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

export default countReducer
