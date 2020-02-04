import { AppState, AppAction } from '../../components/App/AppTypes';
import { HomeState } from '../../components/Home/HomeTypes';

export type ApplicationAction = AppAction;

export type ApplicationState = {
  App: AppState;
  Home: HomeState;
};
