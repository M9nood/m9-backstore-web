import { NuxtOptionsServerMiddleware } from '@nuxt/types/config/server-middleware'
import user from './user'

const routes: NuxtOptionsServerMiddleware[] = [...user]

export default routes
