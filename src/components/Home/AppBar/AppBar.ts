import AppBar from './AppBarComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../common/Redux/types';
import { AppBarOwnProps, AppBarStateProps } from './AppBarTypes';
import { Dispatch } from 'redux';
import { handleLogOut } from './duck/AppBarOperations';

const mapStateToProps = (state: ApplicationState, ownProps: AppBarOwnProps): AppBarStateProps => ({
    handleLogOut,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: AppBarOwnProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
