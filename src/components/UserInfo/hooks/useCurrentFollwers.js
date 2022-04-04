import { useRecoilValue } from 'recoil';

import userFollowersState from '../../../stores/users/userFollowersState'

function useCurrentFollowers() {
  const userFollowers = useRecoilValue(userFollowersState);

  return userFollowers
}

export default useCurrentFollowers
