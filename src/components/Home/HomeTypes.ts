import { RouteComponentProps } from '@reach/router';
import { Action } from 'redux';

export type HomeRoomSelectedActionType = 'HOME_ROOM_SELECTED';
export type HomeUserDataLoadedActionType = 'HOME_USER_DATA_LOADED';

export type HomeActionType = HomeRoomSelectedActionType | HomeUserDataLoadedActionType;

export type AppActionTypesConstant = {
  HOME_ROOM_SELECTED: HomeRoomSelectedActionType;
  HOME_USER_DATA_LOADED: HomeUserDataLoadedActionType;
};

export interface IUserInfo {
  creationDate: Date;
  firstName: String;
  lastName: String;
  username: String;
}

export interface IUSerData {
  chatList: String[];
  rsaKey: String;
  userInfo: IUserInfo;
}

export interface HomeUserDataLoadedAction extends Action {
  type: HomeUserDataLoadedActionType;
  userData: IUSerData;
}

export interface HomeRoomSelectedAction extends Action {
  type: HomeRoomSelectedActionType;
  selectedRoomName: String;
}

export type HomeAction = HomeUserDataLoadedAction | HomeRoomSelectedAction;

export type HomeState = {
  userData: IUSerData;
  selectedRoomName: String;
};

type HomeStateProps = {
  uid: string;
  userData: IUSerData;
  redirectUserCreationIfNeeded: (userData: IUSerData) => void;
};

type HomeDispatchProps = {
  getUserData: Function;
};

export type HomeProps = HomeStateProps & HomeDispatchProps & RouteComponentProps;
