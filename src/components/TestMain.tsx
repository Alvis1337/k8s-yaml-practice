import {Button, Grid, Typography} from "@mui/material";
import {checkAnswer, getUnsolvedTests} from "../utils/baseFuncs.tsx";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';
import {TestState} from "../utils/testTypes.ts";
import {useEffect, useState} from "react";
import {setTestListState, setTestState} from "../store/silces/testListSlice.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {yamlTests} from "../utils/yamlTests.tsx";

interface TestMainProps {
    setSolvedFunc: (test: TestState) => void;
}

const TestMain = ({
                      setSolvedFunc,
                  }: TestMainProps) => {

    const dispatch = useAppDispatch()

    const testList = useAppSelector((state) => state.testState.testList)
    const test = useAppSelector((state) => state.testState.test)
    const setSolved = setSolvedFunc

    const [inputValue, setInputValue] = useState('')

    const newTest = () => {
        const unsolvedTests = getUnsolvedTests(testList)
        if (unsolvedTests.length > 0) {
            dispatch(setTestState(unsolvedTests[0]))
            setInputValue('')
        } else {
            dispatch(setTestListState(testList))
            dispatch(setTestState(yamlTests[0]))
        }
    }

    useEffect(() => {
    //     if the test is changed, set the input value to ''
        setInputValue('')
    }, [test]);

    // if the current test gets solved, remove it fromt he testlist and set the next test
    useEffect(() => {
        if (test.solved) {
            const newTestList = testList.filter((t) => t.name !== test.name)
            dispatch(setTestListState(newTestList))
            newTest()
        }
    }, [dispatch, newTest, test.name, test.solved, testList]);

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }} spacing={2}>
            <Grid item xs={8} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
            }}>
                <Typography variant="body1" textAlign={"center"}>
                    {test.description}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}>
                <AceEditor
                    mode="yaml"
                    theme="monokai"
                    onChange={setInputValue}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    value={inputValue}
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />
            </Grid>
            <Grid container sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid item xs={4} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 2
                }}>
                    {test ? <Button variant="contained"
                                    onClick={() => setInputValue(test.yaml)}>Fill</Button> : null}
                </Grid>

                <Grid item xs={4} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button variant="contained"
                            onClick={() => {
                                if (checkAnswer(inputValue, test.yaml)) {
                                    console.log('im trying to set solved')
                                    setSolved(test)
                                }
                            }}>
                        Check
                    </Button>
                </Grid>
            </Grid>
            {test.solved && (
                <Grid container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {test.solved && <Typography variant="h2" color={'green'}>Correct</Typography>}
                    </Grid>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button variant="contained" onClick={() => newTest()}>Next</Button>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default TestMain