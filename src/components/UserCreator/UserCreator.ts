import UserCreator from './UserCreatorComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';

const mapStateToProps = (state: ApplicationState, ownProps: any) => ({});

export default connect(mapStateToProps, null)(UserCreator);
