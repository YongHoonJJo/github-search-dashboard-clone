import { selector } from 'recoil';

import userState from './usersState'

const userCardState = selector({
  key: 'userCardState',
  get: async ({ get }) => {
    const userInfo = get(userState)
    const { avatar_url, name, twitter_username, html_url, bio, company, location, blog } = userInfo || {}

    return { avatar_url, name, twitter_username, html_url, bio, company, location, blog }
  }
});

export default userCardState
