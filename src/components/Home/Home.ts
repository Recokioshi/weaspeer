import Home from './HomeComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { RouteComponentProps } from '@reach/router';
import { redirectUserCreationIfNeeded, redirectPasswordCreationIfNeeded } from './duck/HomeOperations';

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps) => {
  const { uid, userData, privateKey } = state.App;
  return {
    uid,
    userData,
    privateKey,
    redirectUserCreationIfNeeded,
    redirectPasswordCreationIfNeeded,
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
