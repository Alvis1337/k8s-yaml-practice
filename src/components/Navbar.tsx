import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {setTestStateAllSolved, setTestStateAllUnsolved} from "../store/silces/testListSlice.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {getUnsolvedTests} from "../utils/baseFuncs.tsx";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const tests = useAppSelector((state) => state.testState.testList)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const dispatch = useAppDispatch();

    return (
        <AppBar position="fixed" sx={{minWidth: '100%'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <MenuItem key={'setTestStateAllSolved'} onClick={() => dispatch(setTestStateAllSolved())}>
                                <Typography textAlign="center">Solve All</Typography>
                            </MenuItem>
                            <MenuItem key={'resetTestStateAllSolved'} onClick={() => dispatch(setTestStateAllUnsolved())}>
                                <Typography textAlign="center">Reset</Typography>
                            </MenuItem>
                            <MenuItem key={'restartTests'} onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }}>
                                <Typography textAlign="center">Restart</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            key={'solve_all'}
                            onClick={() => dispatch(setTestStateAllSolved())}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Solve All
                        </Button>
                        <Button
                            key={'reset_all'}
                            onClick={() => dispatch(setTestStateAllUnsolved())}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Unsolve All
                        </Button>
                        <Button
                            key={'reset_test'}
                            onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Restart
                        </Button>
                    </Box>

                    {getUnsolvedTests(tests).length !== 0 && (
                        <Box sx={{flexGrow: 0}}>
                            <Typography variant={"body1"}>
                                {getUnsolvedTests(tests).length} tests remaining
                            </Typography>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;