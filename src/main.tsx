import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store.ts";
import {PersistGate} from "redux-persist/integration/react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        loader: async () => {
            return null
        },
        children: [
            {
                path: "/",
                index: true,
                element: <Home/>,
                loader: async () => {
                    return null
                },
            },
        ],
    },
]);


const theme = createTheme({
    // create my own custom typography variant
    typography: {
        fontFamily: 'Roboto',
        subtitle1: {
            fontSize: '1rem',
            textTransform: 'none'
        },
        subtitle2: {
            fontSize: '.8rem',
            textTransform: 'none'
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#BD8D24FF',
        },
        secondary: {
            main: '#BD8D24FF',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                sx: {
                    '&:hover': {
                        backgroundColor: '#a33'
                    }
                }
            }
        },
        MuiLink: {
            defaultProps: {
                sx: {
                    '&:hover': {
                        textDecoration: 'none',
                        color: 'white'
                    }
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    '&:focus': {
                        outline: 'none'
                    },
                }
            }
        },
    }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
)
