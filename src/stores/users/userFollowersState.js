import { selector } from 'recoil';

import searchTextState from "../dashboard/searchTextState";
import usersApi from "../../services/apis/users";

const userFollowersState = selector({
  key: 'userFollowersState',
  get: async ({ get }) => {
    const searchText = get(searchTextState) || 'YongHoonJJo'
    const resp = await usersApi.getFollowers(searchText)
    return resp.data;
  }
});

export default userFollowersState
