import { RouteComponentProps } from '@reach/router';
import { Action } from 'redux';
import { IUSerData } from '../App/UserData';

export type HomeRoomSelectedActionType = 'HOME_ROOM_SELECTED';

export type HomeActionType = HomeRoomSelectedActionType;

export type AppActionTypesConstant = {
  HOME_ROOM_SELECTED: HomeRoomSelectedActionType;
};

export interface HomeRoomSelectedAction extends Action {
  type: HomeRoomSelectedActionType;
  selectedRoomName: String;
}

export type HomeAction = HomeRoomSelectedAction;

export type HomeState = {
  selectedRoomName: String;
};

type HomeStateProps = {
  uid: string;
  checkingUser: Boolean;
  userData: IUSerData;
  redirectUserCreationIfNeeded: (userData: IUSerData, checkingUser: Boolean) => void;
  redirectPasswordCreationIfNeeded: (userData: IUSerData, checkingUser: Boolean) => void;
};

type HomeDispatchProps = {};

export type HomeProps = HomeStateProps & HomeDispatchProps & RouteComponentProps;
