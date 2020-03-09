import { RouteComponentProps } from '@reach/router';

export type MenuListStateProps = {
    redirectToSettings: () => void;
    redirectToChats: () => void;
    redirectToFriends: () => void;
};

export type MenuListDispatchProps = {};

export type MenuListOwnProps = RouteComponentProps & {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
};

export type MenuListProps = MenuListStateProps & MenuListDispatchProps & MenuListOwnProps;
