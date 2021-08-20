import { all, takeLatest } from 'redux-saga/effects'
import { HomeActionTypes } from 'redux/types/HomeTypes'
import { homeService } from 'services/HomeServices'

export function* homeSaga() {
  // handle logic
  homeService()
}

export default function* homeSagas() {
  yield all([takeLatest(HomeActionTypes.INCREMENT, homeSaga)])
}
