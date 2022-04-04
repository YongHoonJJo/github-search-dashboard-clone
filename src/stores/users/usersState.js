import { selector } from 'recoil';

import usersApi from "../../services/apis/users";

const userState = selector({
  key: 'userState',
  get: async () => {
    const resp = await usersApi.getUser('YongHoonJJo')
    return resp.data;
  }
});

export default userState
