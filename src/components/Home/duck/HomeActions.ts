import { ActionCreator } from 'redux';
import C from './HomeConstants';

import { HomeRoomSelectedAction } from '../HomeTypes';

export const roomSelected: ActionCreator<HomeRoomSelectedAction> = (selectedRoomName: String) => ({
    type: C.HOME_ROOM_SELECTED,
    selectedRoomName,
});
