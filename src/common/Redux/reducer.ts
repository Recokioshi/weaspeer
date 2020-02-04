import { combineReducers } from 'redux';
import App from '../../components/App/duck/AppReducer';
import Home from '../../components/Home/duck/HomeReducer';
import { ApplicationState } from './types';

export default combineReducers<ApplicationState>({ App, Home });
