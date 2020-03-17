import EmptyFriendsListWelcomeScreenComponent from './EmptyFriendsListWelcomeScreenComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../common/Redux/types';
import {
    EmptyFriendsListWelcomeScreenOwnProps,
    EmptyFriendsListWelcomeScreenStateProps,
    EmptyFriendsListWelcomeScreenDispatchProps
} from './EmptyFriendsListWelcomeScreenTypes';
import { redirectToAddNewFriend } from '../duck/FriendsListOperations';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ApplicationState, ownProps: EmptyFriendsListWelcomeScreenOwnProps) => ({
    redirectToAddNewFriend,
    ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: EmptyFriendsListWelcomeScreenOwnProps) => ({});
export default connect<
    EmptyFriendsListWelcomeScreenStateProps,
    EmptyFriendsListWelcomeScreenDispatchProps,
    EmptyFriendsListWelcomeScreenOwnProps,
    ApplicationState
>(
    mapStateToProps,
    mapDispatchToProps
)(EmptyFriendsListWelcomeScreenComponent);
