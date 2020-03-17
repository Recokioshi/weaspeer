import FriendsList from './FriendsListComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { FriendsListOwnProps, FriendsListStateProps, FriendsListDispatchProps } from './FriendsListTypes';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ApplicationState, ownProps: FriendsListOwnProps): FriendsListStateProps => ({
    friendsList: state.App.userData.friendsList as string[],
    ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: FriendsListOwnProps) => ({});

export default connect<FriendsListStateProps, FriendsListDispatchProps, FriendsListOwnProps, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps
)(FriendsList);
