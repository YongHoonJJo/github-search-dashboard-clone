import mainApi from '../mainApi'

const usersApi = {
  getUser(user) {
    return mainApi.get(`/users/${user}`)
  }
}

export default usersApi
