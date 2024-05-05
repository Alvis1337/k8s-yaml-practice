import {Button, Grid, Typography} from "@mui/material";

interface TestBeginProps {
    startTestFunc: () => void;
}

const TestBegin = ({startTestFunc}: TestBeginProps) => {
    const startTest = startTestFunc
    return (
        <>
            <Grid item xs={8} sx={{
                py: 2
            }}>
                <Typography variant="body1">Click the button below to begin. Once you are finished typing
                    the yaml for the test press "Check" below to check your answer. If your answer is
                    correct it will say "Correct" in green letters. If it is incorrect, the screen will not
                    change. To solve the question click the "Fill" button to see the solution. To move on
                    from the current question and save it for later, press the "Next" button. The number of
                    unsolved questions will be displayed in the top left.
                </Typography>
            </Grid>
            <Grid item xs={8} sx={{
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Button variant="contained" onClick={() => startTest()}>Begin</Button>
            </Grid>

        </>
    )
}

export default TestBegin