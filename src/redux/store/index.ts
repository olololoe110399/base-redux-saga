import AsyncStorage from '@react-native-async-storage/async-storage'
import interceptor from 'network/Interceptor'
import { applyMiddleware, createStore } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { createTransform, persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { AppState } from 'redux/reducers'
import rootSaga from 'redux/sagas'

const sagaMiddleware = createSagaMiddleware()

export const PERSIST_KEY = 'root'
const persistConfig = {
  key: PERSIST_KEY,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  transforms: [
    createTransform(
      (inboundState) => ({ ...(inboundState as any), error: '' }),
      (outboundState) => ({ ...outboundState, error: '' }),
      { whitelist: ['auth'] }
    )
  ]
}

const createStoreWithMiddleware = applyMiddleware(
  interceptor({
    onRequestError: (state: any, response: any) => {
      console.log('onRequestError response', response)
    },
    headers: (origHeaders: object) => origHeaders
    // headers: (origHeaders: object, state: AppState) => {
    //   if (Object.entries(origHeaders).length === 0 && state.user.token) {
    //     return {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${state.user.token}`,
    //     };
    //   } else return origHeaders;
    // },
  }),
  sagaMiddleware,
  apiMiddleware
)(createStore)

const store = createStoreWithMiddleware(
  persistReducer<AppState>(persistConfig, rootReducer)
)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
