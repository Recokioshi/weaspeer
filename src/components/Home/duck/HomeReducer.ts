import { HomeState, HomeAction, HomeRoomSelectedAction } from '../HomeTypes';
import C from './HomeConstants';

export const homeInitialState: HomeState = {
    selectedRoomName: '',
};

export default (state: HomeState = homeInitialState, action: HomeAction): HomeState => {
    switch (action.type) {
        case C.HOME_ROOM_SELECTED:
            return { ...state, selectedRoomName: (action as HomeRoomSelectedAction).selectedRoomName };
        default:
            return state;
    }
};
