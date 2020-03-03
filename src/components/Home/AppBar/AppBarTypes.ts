export type AppBarStateProps = {};

export type AppBarDispatchProps = {};

export type AppBarOwnProps = {
    handleLogOut: () => void;
};

export type AppBarProps = AppBarStateProps & AppBarDispatchProps & AppBarOwnProps;
