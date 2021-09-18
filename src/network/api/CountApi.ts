import { createAction } from 'redux-api-middleware'

export const apiGetCounts = () =>
  createAction({
    endpoint:
      'https://google.com,
    method: 'GET',
    types: ['apiGetCounts', 'apiGetCounts2', 'apiGetCounts3']
  })
