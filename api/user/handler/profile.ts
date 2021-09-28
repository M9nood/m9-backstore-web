import { ServerMiddleware } from '@nuxt/types'
import { createJsonResponse } from '../../../utils/response'

export const getProfileHandler: ServerMiddleware = (req, res) => {
  const response = {
    success: true,
    status: 200,
    result: {
      id: 1,
      name: 'M9nood Eiei',
      email: 'spw@mail.com'
    }
  }
  createJsonResponse(res, response.status, response.result)
}
