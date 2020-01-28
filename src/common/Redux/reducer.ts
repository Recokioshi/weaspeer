import { combineReducers } from 'redux';
import App from '../../components/App/duck/AppReducer';
import { ApplicationState } from './types';

export default combineReducers<ApplicationState>({ App });
