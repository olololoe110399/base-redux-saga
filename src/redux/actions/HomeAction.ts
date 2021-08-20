import {
  DecrementAction,
  HomeActionTypes,
  IncrementAction
} from 'redux/types/HomeTypes'

export const onIncrementAction = (): IncrementAction => {
  return {
    type: HomeActionTypes.INCREMENT
  }
}

export const onDecrementAction = (): DecrementAction => {
  return {
    type: HomeActionTypes.DECREMENT
  }
}
