import { createJsonResponse, unexpectedErrResponse } from '../utils/response'
import logger from '../utils/logger'
import $axios from '../utils/axios'
import cookie from 'cookie'

export const PrivateProxy = async (req, res) => {
  try {
    const headers = await createHeader(req)
    let response = await $axios({
      method: req.method,
      url: `${process.env.API_BASE_URL}/api/v1${req.url}`,
      headers: headers,
      data: req.body
    })
    createJsonResponse(res, 200, response.data)
  } catch (error) {
    unexpectedErrResponse(
      res,
      200,
      error.response.data.errorName || '',
      error.response.data.errorMessage || 'error'
    )
  }
}

async function createHeader(req) {
  let headers = {}
  try {
    if (req && req.headers && req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie || '')
      const user = JSON.parse(cookies['auth.user'])
      headers['Authorization'] = `Bearer ${user.token.access_token}`
      return headers
    }
  } catch (err) {
    return headers
  }
}
