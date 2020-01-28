import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';
import { appInitialState } from '../../components/App/duck/AppReducer';

const initialState = {
  App: appInitialState
};

export default createStore<ApplicationState, ApplicationAction, unknown, unknown>(
  reducer,
  initialState,
  applyMiddleware(thunk)
);
