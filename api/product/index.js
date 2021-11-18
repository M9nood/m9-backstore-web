import { PrivateProxy } from '../private'

const routes = [
  {
    path: '/api/v1',
    handler: PrivateProxy
  }
]

export default routes
