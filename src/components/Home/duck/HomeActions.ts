import { ActionCreator } from 'redux';
import C from './HomeConstants';

import { HomeUserDataLoadedAction, IUSerData, HomeRoomSelectedAction } from '../HomeTypes';

export const userDataLoaded: ActionCreator<HomeUserDataLoadedAction> = (userData: IUSerData) => ({
  type: C.HOME_USER_DATA_LOADED,
  userData,
});

export const roomSelected: ActionCreator<HomeRoomSelectedAction> = (selectedRoomName: String) => ({
  type: C.HOME_ROOM_SELECTED,
  selectedRoomName,
});
