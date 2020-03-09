import React from 'react';
import MenuList from '../MenuList/MenuList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBarProps } from './AppBarTypes';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(4),
        },
        toolbar: theme.mixins.toolbar,
    }),
);

const AppBarComponent: React.FC<AppBarProps> = ({ handleLogOut, children }) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = (): void => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Weaspeer
                    </Typography>
                    <Button color="inherit" onClick={handleLogOut}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <MenuList handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
};

export default AppBarComponent;
