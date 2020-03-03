import AppBar from './AppBarComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../common/Redux/types';
import { AppBarOwnProps, AppBarStateProps, AppBarDispatchProps } from './AppBarTypes';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ApplicationState, ownProps: AppBarOwnProps): AppBarStateProps => ({
    ...ownProps,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: AppBarOwnProps) => ({});

export default connect<AppBarStateProps, AppBarDispatchProps, AppBarOwnProps, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps,
)(AppBar);
