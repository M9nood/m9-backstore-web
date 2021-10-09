import { createJsonResponse, unexpectedErrResponse } from '../../utils/response'
import logger from '../../utils/logger'
import $axios from '../../utils/axios'

export const UserProxy = (req, res) => {
  let response
  try {
    response = {
      success: true,
      status: 200,
      data: {
        id: 1,
        name: 'M9nood Eiei',
        email: 'spw@mail.com'
      }
    }
    createJsonResponse(res, 200, response)
  } catch (error) {
    unexpectedErrResponse(
      res,
      error.status || 500,
      error.response.data.errorName,
      error.response.data.errorMessage
    )
  }
}
