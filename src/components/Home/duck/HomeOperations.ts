import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';
import { IUSerData } from '../../App/UserData';

export const redirectUserCreationIfNeeded = (userData: IUSerData, checkingUser: Boolean) => {
    console.log(`checkingUser: ${checkingUser}, isUserDataComplete(userData): ${isUserDataComplete(userData)}`);
    if (!checkingUser && !isUserDataComplete(userData)) {
        navigate(paths.USER_CREATOR);
    }
};

export const isUserDataComplete = ({ rsaKey, userInfo }: IUSerData): Boolean => {
    console.log(`checking ${JSON.stringify(userInfo)} and ${rsaKey}`);
    const { creationDate, firstName, lastName, username } = userInfo;
    return !!rsaKey && !!creationDate && !!firstName && !!lastName && !!username;
};
