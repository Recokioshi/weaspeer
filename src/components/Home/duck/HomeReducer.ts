import {
  HomeState,
  HomeAction,
  HomeRoomSelectedAction,
  HomeUserDataLoadedAction,
} from '../HomeTypes';
import C from './HomeConstants';

export const homeInitialState: HomeState = {
  userData: {
    chatList: [],
    rsaKey: '',
    userInfo: {
      creationDate: new Date(),
      firstName: '',
      lastName: '',
      username: '',
    },
  },
  selectedRoomName: '',
};

export default (state: HomeState = homeInitialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case C.HOME_ROOM_SELECTED:
      return { ...state, selectedRoomName: (action as HomeRoomSelectedAction).selectedRoomName };
    case C.HOME_USER_DATA_LOADED:
      return { userData: (action as HomeUserDataLoadedAction).userData, selectedRoomName: '' };
    default:
      return state;
  }
};
