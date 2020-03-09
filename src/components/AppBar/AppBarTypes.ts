export type AppBarStateProps = {};

export type AppBarDispatchProps = {};

export type AppBarOwnProps = {
    handleLogOut: () => void;
    children: React.ReactNode;
};

export type AppBarProps = AppBarStateProps & AppBarDispatchProps & AppBarOwnProps;
