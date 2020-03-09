import { navigate } from '@reach/router';
import { paths } from '../../../../common/Router/constants';

export const redirectToSettings = () => {
    navigate(paths.SETTINGS);
};

export const redirectToChats = () => {
    navigate(paths.CHATS);
};

export const redirectToFriends = () => {
    navigate(paths.FRIENDS);
};
