import { selector } from 'recoil';

import userState from './usersState'

const userInfoState = selector({
  key: 'userInfoState',
  get: async ({ get }) => {
    const userInfo = get(userState)
    const { public_repos, public_gists, followers, following } = userInfo || {}

    return { public_repos, public_gists, followers, following }
  }
});

export default userState
