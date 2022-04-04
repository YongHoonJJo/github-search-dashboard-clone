import { selector } from 'recoil';

import searchTextState from '../dashboard/searchTextState'
import usersApi from "../../services/apis/users";

const userState = selector({
  key: 'userState',
  get: async ({ get }) => {
    const searchText = get(searchTextState) || 'YongHoonJJo'
    const resp = await usersApi.getUser(searchText)
    return resp.data;
  }
});

export default userState
