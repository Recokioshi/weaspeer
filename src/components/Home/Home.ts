import Home from './HomeComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { RouteComponentProps } from '@reach/router';

const mapStateToProps = (state: ApplicationState, ownProps: RouteComponentProps) => ({
  path: ownProps.path
});

export default connect(mapStateToProps, null)(Home);
