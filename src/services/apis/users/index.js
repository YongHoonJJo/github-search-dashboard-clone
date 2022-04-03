import mainApi from '../mainApi'

const usersApi = {
  getUser(user) {
    return mainApi.get(`/users/${user}`)
  },
  getFollowers(user) {
    return mainApi.get(`/users/${user}/followers`)
  }
}

export default usersApi
