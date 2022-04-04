import { useRecoilValue } from 'recoil';

import userInfoState from '../../../stores/users/userInfoState'

function useCurrentUserInfo() {
  const userInfo = useRecoilValue(userInfoState);

  return userInfo
}

export default useCurrentUserInfo;
