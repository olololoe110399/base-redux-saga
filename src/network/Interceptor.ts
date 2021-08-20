/* eslint-disable prettier/prettier */
import { RSAA } from 'redux-api-middleware'

const isFunction = (func: () => void) => typeof func === 'function'
const isObject = (obj: any) => typeof obj === 'object'
const throwError = (name: string, expected: string) => {
  throw new Error(`Expected '${name}' to be ${expected}`)
}

const getHeaders = (headerParams: any, origHeaders = {}, state: any) => {
  const headers = isFunction(headerParams)
    ? headerParams(origHeaders, state)
    : headerParams
  return isObject(headers) ? headers : origHeaders
}

const getCustomURL = (url: any, config: any, state: any) => {
  if (
    !/^((http|https|ftp):\/\/)/i.test(url) &&
    config.getURL &&
    (isFunction(config.getURL) || throwError('getURL', 'Function'))
  ) {
    const customURL = config.getURL(url, state)
    if (!customURL) {
      throwError('return value of getURL', 'String')
    }
    return customURL
  }
  return url
}

export default (configObj: any) =>
  ({ getState }: any) =>
  (next: any) =>
  (action: any) => {
    const callApi = action[RSAA]
    // Check if this action is a redux-api-middleware action.
    if (callApi) {
      const state = getState()

      // Set headers
      callApi.headers = getHeaders(configObj.headers, callApi.headers, state)

      // GET CUSTOM API URL if getURL func exist in config obj
      callApi.endpoint = getCustomURL(callApi.endpoint, configObj, state)

      // add response interceptor to watch on request calls
      if (
        configObj.onRequestInit &&
        (isFunction(configObj.onRequestInit)
          ? true
          : throwError('onRequestInit', 'Function'))
      ) {
        const type = callApi.types[0]
        callApi.types[0] = {
          type: type.type || type,
          meta: type.meta || {},
          payload: (dispatchedAction: any, _state: any, res: any) => {
            configObj.onRequestInit(_state)
            return res
          }
        }
      }

      // add response interceptor to watch on success calls
      if (
        configObj.onRequestSuccess &&
        (isFunction(configObj.onRequestSuccess)
          ? true
          : throwError('onRequestSuccess', 'Function'))
      ) {
        const type = callApi.types[1]
        callApi.types[1] = {
          type: type.type || type,
          meta: type.meta || {},
          payload: (dispatchedAction: any, _state: any, res: any) => {
            const promise = res.json()
            promise.then((json: any) => {
              configObj.onRequestSuccess(_state, { ...json })
            })
            return promise
          }
        }
      }

      // add response interceptor to watch on error calls
      if (
        configObj.onRequestError &&
        (isFunction(configObj.onRequestError)
          ? true
          : throwError('onRequestError', 'Function'))
      ) {
        const type = callApi.types[2]
        callApi.types[2] = {
          type: type.type || type,
          meta: type.meta || {},
          payload: (dispatchedAction: any, _state: any, res: any) => {
            const clonedRes = res.clone()
            let data: any = null
            res.text().then((text: any) => {
              data = JSON.parse(text)
              try {
                configObj.onRequestError(_state, {
                  status_code: res.status,
                  statusText: data?.title,
                  ...JSON.parse(text)
                })
                const newData = clonedRes
                newData.meta = data
                clonedRes.meta = data
                clonedRes.statusText = data?.title
                return newData
              } catch (e) {
                configObj.onRequestError(_state, {
                  status_code: res.status,
                  is_json: false,
                  raw_res: text
                })
                clonedRes.meta = data
              }
            })
            const newData = clonedRes
            clonedRes.meta = data
            clonedRes.statusText = data?.title
            return newData
          }
        }
      }
    }

    // Pass the FSA to the next action.
    return next(action)
  }
