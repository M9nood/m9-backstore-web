import { NuxtOptionsServerMiddleware } from '@nuxt/types/config/server-middleware'

import { getProfileHandler } from './handler/profile'

const routes: NuxtOptionsServerMiddleware[] = [
  {
    path: '/api/users/profile',
    handler: getProfileHandler
  }
]

export default routes
