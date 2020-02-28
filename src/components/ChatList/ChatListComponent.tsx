import React from 'react';
import { ChatListProps } from './ChatListTypes';
import EmptyChatListWelcomeScreen from './EmptyChatListWelcomeScreen/EmptyChatListWelcomeScreen';

const ChatList: React.FC<ChatListProps> = ({ roomList }) => {
  return <div>{!roomList.length ? <EmptyChatListWelcomeScreen /> : 'ChatList'}</div>;
};

export default ChatList;
