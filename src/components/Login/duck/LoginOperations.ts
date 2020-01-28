import { navigate } from '@reach/router';
import { paths } from '../../../common/Router/constants';

export const redirectToHomeIfNeeded = (authorized: boolean) => {
  if (authorized) {
    navigate(paths.HOME);
  }
};
