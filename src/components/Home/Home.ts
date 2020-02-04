import Home from './HomeComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { RouteComponentProps } from '@reach/router';
import { getUserData, redirectUserCreationIfNeeded } from './duck/HomeOperations';

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps) => ({
  uid: state.App.uid,
  userData: state.Home.userData,
  redirectUserCreationIfNeeded,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserData: (uid: string) => {
    dispatch(getUserData(dispatch, uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
