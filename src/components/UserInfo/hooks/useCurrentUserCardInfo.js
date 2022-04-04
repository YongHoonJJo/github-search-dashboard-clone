import { useRecoilValue } from 'recoil';

import userCardState from '../../../stores/users/userCardState'

function useCurrentUserCardInfo() {
  const userCardInfo = useRecoilValue(userCardState);

  return userCardInfo
}

export default useCurrentUserCardInfo;
