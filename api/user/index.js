import { UserProxy } from './proxy'

const routes = [
  {
    path: '/api/users/profile',
    handler: UserProxy
  }
]

export default routes
