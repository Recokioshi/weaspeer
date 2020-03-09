import MenuListComponent from './MenuListComponent';
import { connect } from 'react-redux';
import { MenuListStateProps, MenuListDispatchProps, MenuListOwnProps } from './MenuListTypes';
import { Dispatch } from 'redux';
import { redirectToChats, redirectToFriends, redirectToSettings } from './duck/MenuListOperations';
import { AppState } from '../../App/AppTypes';

const mapStateToProps = (state: AppState, ownProps: MenuListOwnProps): MenuListStateProps => ({
    redirectToChats,
    redirectToFriends,
    redirectToSettings,
    ...ownProps,
});

const mapDispatchToProps = (dispatch: Dispatch): MenuListDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuListComponent);
