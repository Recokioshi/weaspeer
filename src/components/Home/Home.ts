import Home from './HomeComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state: any, ownProps: any) => ({
  path: ownProps.path,
  user: state.authenticated ? state.loggedInUser : 'none'
});

export default connect(mapStateToProps, null)(Home);
