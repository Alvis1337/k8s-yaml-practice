import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const Layout = () => {
    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
                <Navbar/>
                <Outlet/>
        </Grid>

    )
}

export default Layout;
