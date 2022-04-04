import { useSetRecoilState } from 'recoil';

import searchTextState from '../../../stores/dashboard/searchTextState';

function useSearchUser() {
  return useSetRecoilState(searchTextState)
}

export default useSearchUser
