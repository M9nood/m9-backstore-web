import { createJsonResponse, unexpectedErrResponse } from '../../utils/response'
import logger from '../../utils/logger'
import $axios from '../../utils/axios'

export const AuthProxy = async (req, res) => {
  let response
  try {
    response = await $axios({
      method: req.method,
      url: `${process.env.API_BASE_URL}/api/v1/auth${req.url}`,
      data: req.body
    })
    createJsonResponse(res, 200, response.data)
  } catch (error) {
    unexpectedErrResponse(
      res,
      error.status || 500,
      error.response.data.errorName,
      error.response.data.errorMessage
    )
  }
}
