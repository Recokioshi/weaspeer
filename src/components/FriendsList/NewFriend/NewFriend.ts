import NewFriendComponent from './NewFriendComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../common/Redux/types';
import { NewFriendOwnProps, NewFriendStateProps, NewFriendDispatchProps } from './NewFriendTypes';
import { redirectToAddNewFriend } from '../duck/FriendsListOperations';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ApplicationState, ownProps: NewFriendOwnProps) => ({
    redirectToAddNewFriend,
    ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NewFriendOwnProps) => ({});
export default connect<NewFriendStateProps, NewFriendDispatchProps, NewFriendOwnProps, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps
)(NewFriendComponent);
