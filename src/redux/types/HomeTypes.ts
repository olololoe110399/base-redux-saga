import { Action } from 'redux'

export interface HomeState {
  count: number
}

export enum HomeActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export interface IncrementAction
  extends Action<typeof HomeActionTypes.INCREMENT> {}

export interface DecrementAction
  extends Action<typeof HomeActionTypes.DECREMENT> {}

export type HomeActionType = IncrementAction | DecrementAction
