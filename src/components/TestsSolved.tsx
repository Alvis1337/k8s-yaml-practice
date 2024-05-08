import {Button, Grid, Typography} from "@mui/material";
import {setTestStateAllUnsolved} from "../store/silces/testListSlice.tsx";
import {useAppDispatch} from "../store/hooks.ts";

const TestsSolved = () => {
    const dispatch = useAppDispatch()
    const resetTestList = () => {
        dispatch(setTestStateAllUnsolved())
    }
    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2
            }}>
                <Typography variant="h2" color={'green'} textAlign={"center"}>
                    All tests completed
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2
            }}>
                <Button variant="contained" onClick={() => resetTestList()}>Reset</Button>
            </Grid>
        </Grid>
    )
}

export default TestsSolved