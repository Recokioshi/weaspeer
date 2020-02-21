import Home from './HomeComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { RouteComponentProps } from '@reach/router';
import { redirectUserCreationIfNeeded, redirectPasswordCreationIfNeeded } from './duck/HomeOperations';

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps) => ({
  uid: state.App.uid,
  userData: state.App.userData,
  checkingUser: state.App.checkingUser,
  redirectUserCreationIfNeeded,
  redirectPasswordCreationIfNeeded,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
