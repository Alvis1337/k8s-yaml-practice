import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <Outlet/>
        </Grid>

    )
}

export default Layout;
