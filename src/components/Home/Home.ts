import Home from './HomeComponent';
import { connect } from 'react-redux';
import { ApplicationState } from '../../common/Redux/types';
import { redirectUserCreationIfNeeded, redirectPasswordCreationIfNeeded } from './duck/HomeOperations';
import { HomeOwnProps } from './HomeTypes';

const mapStateToProps = (state: ApplicationState, ownProps: HomeOwnProps) => {
    const { uid, userData, privateKey } = state.App;
    return {
        uid,
        userData,
        privateKey,
        redirectUserCreationIfNeeded,
        redirectPasswordCreationIfNeeded,
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
