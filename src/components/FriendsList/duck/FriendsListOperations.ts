import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';

export const redirectToAddNewFriend = () => {
    navigate(paths.NEW_FRIEND);
};
