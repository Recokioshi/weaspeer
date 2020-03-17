const simplePaths = {
    HOME: '/',
    LOGIN: 'login',
    CREATE_USER: 'create-user',
    CREATE_PASSWORD: 'create-password',
    SETTINGS: 'settings',
    CHATS: 'chats',
    FRIENDS: 'frineds'
};

export const paths = {
    ...simplePaths,
    NEW_FRIEND: `${simplePaths.FRIENDS}/add-friend`
};
