import {setTestState} from "../store/silces/testListSlice.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {TestState} from "../utils/testTypes.ts";
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

const Tests = () => {
    const dispatch = useAppDispatch()

    const selectTest = (test: TestState) => {
        dispatch(setTestState(test))
    }

    const testList = useAppSelector((state) => state.testState.testList)
    const currentTest = useAppSelector((state) => state.testState.test)

    return (
        <Grid container spacing={2} sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            p: '1rem',
            maxHeight: '60vh',
            overflow: 'auto'
        }}>
            {!!testList && testList.map((test) => {
                return (
                    <Grid item xs={12} md={6} xl={4} key={test.name} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <Card sx={{
                            backgroundColor: test.solved ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)',
                            border: currentTest.name === test.name ? '2px solid white' : 'none',
                            width: '100%',
                            minHeight: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}> <CardContent>
                            <Typography variant="h5" component="div">
                                {test.name}
                            </Typography>
                            <Typography variant="body2">
                                Category: {test.categories.join(', ')}
                            </Typography>
                            <Typography variant="body2">
                                Solved: {test.solved ? 'Yes' : 'No'}
                            </Typography>
                        </CardContent>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                //     get the button at the bottom of the div
                                alignItems: 'end',
                                '&:active': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    border: 'none'
                                }
                            }}>
                                <Button disableRipple onClick={() => selectTest(test)} fullWidth size="large"
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                        border: 'none'
                                    },
                                    '&:active': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                        border: 'none'
                                    }
                                }}
                                >Select</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Tests