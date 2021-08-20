import { createAction } from 'redux-api-middleware'

export const apiGetCounts = () =>
  createAction({
    endpoint:
      'https://erp-clover-dev-api-laravel.demo.greenglobal.vn/api/v1/branches',
    method: 'GET',
    types: ['apiGetCounts', 'apiGetCounts2', 'apiGetCounts3']
  })
