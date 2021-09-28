import { ModuleTree } from 'vuex'
import user from './modules/user'

export const state = () => ({
  things: [] as string[],
  name: 'Me'
})

export type RootState = ReturnType<typeof state>

export const modules: ModuleTree<RootState> = {
  user
}
