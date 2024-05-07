import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const Layout = () => {

    // need the Navbar to stay at the top of the screen

    return (
        <Grid container sx={{display: 'flex', flexDirection: 'column', pt: '64px'}}>
            <Navbar/>
            <Outlet/>
        </Grid>

    )
}

export default Layout;