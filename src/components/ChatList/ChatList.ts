import ChatList from './ChatListComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { ChatListOwnProps, ChatListStateProps, ChatListDispatchProps } from './ChatListTypes';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ApplicationState, ownProps: ChatListOwnProps): ChatListStateProps => ({
  roomList: state.App.userData.chatList as string[],
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ChatListOwnProps) => ({});

export default connect<ChatListStateProps, ChatListDispatchProps, ChatListOwnProps, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);
