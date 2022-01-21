export interface UserState {
  user: User | null
}
export interface User {
  id: number
  name: string
  email: string
}
const initialState = {
  user: {
    id: 0,
    name: '333',
    email: '333',
  },
}
const state = () => initialState

const mutations = {
  SET_USER(state: UserState, user: User) {
    state.user = user
  },
  CLEAR_USER(state: UserState) {
    state.user = null
  },
  CLEAR_STATE(state: UserState) {
    state = initialState
  },
}

const getters = {
  user: (state: UserState) => state.user,
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}
