import {Button, Grid, Typography} from "@mui/material";

interface TestsSolvedProps {
    resetTestListFunc: () => void;
}

const TestsSolved = ({resetTestListFunc}: TestsSolvedProps) => {
    const resetTestList = resetTestListFunc
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