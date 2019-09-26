export const state = () => ({
  user: {
    logged: false
  },
  admin: {
    logged: false
  }
})

export const mutations = {
  increment (state) {
    state.user.logged = true
  }
}