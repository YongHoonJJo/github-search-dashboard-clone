import { selector } from 'recoil';

import usersApi from "../../services/apis/users";

const userFollowersState = selector({
  key: 'userFollowersState',
  get: async () => {
    const resp = await usersApi.getFollowers('YongHoonJJo')
    return resp.data;
  }
});

export default userFollowersState
