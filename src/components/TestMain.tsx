import {Button, Grid, Typography} from "@mui/material";
import {checkAnswer, getUnsolvedTests} from "../utils/baseFuncs.tsx";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';
import {TestState} from "../utils/testTypes.ts";

interface TestMainProps {
    yamlInput: string;
    setYamlInput: (value: string) => void;
    yamlTest: {
        name: string;
        yaml: string;
        description: string;
        solved: boolean;
        categories: string[];
    };
    setSolvedFunc: (test: TestState) => void;
    newTestFunc: () => void;
    resetTestListFunc: () => void;
    yamlTests: {
        name: string;
        yaml: string;
        description: string;
        solved: boolean;
        categories: string[];
    }[];
}

const TestMain = ({
                      yamlInput,
                      setYamlInput,
                      yamlTest,
                      setSolvedFunc,
                      newTestFunc,
                      resetTestListFunc,
                      yamlTests
                  }: TestMainProps) => {
    const inputValue = yamlInput
    const setInputValue = setYamlInput
    const resetTestList = resetTestListFunc
    const test = yamlTest
    const setSolved = setSolvedFunc
    const newTest = newTestFunc
    const tests = yamlTests

    const TopButtons = () => {
        return (
            <Grid item xs={12} sx={{
                width: '100%'
            }}>
                <Grid container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Grid item xs={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 2
                    }}>
                        <Typography variant={"body1"}>
                            {getUnsolvedTests(tests).length} tests remaining
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 2
                    }}>
                        <Button variant="contained" onClick={() => resetTestList()}>Reset</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const Description = () => {
        return (
            <Grid item xs={8} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}>
                <Typography variant="body1" textAlign={"center"}>
                    {test.description}
                </Typography>
            </Grid>
        )
    }

    const Editor = () => {
        return (
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
        )
    }

    const AnswerCorrect = () => {
        return (
            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {test.solved && <Typography variant="h2" color={'green'}>Correct</Typography>}
            </Grid>
        )
    }

    const BottomButtons = () => {
        if (!test.solved) {
            return (
                <Grid container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid item xs={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 2
                    }}>
                        {test ? <Button variant="contained"
                                        onClick={() => setInputValue(test.yaml)}>Fill</Button> : null}
                    </Grid>
                    <Grid item xs={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button variant="contained" onClick={() => setInputValue('')}>Clear</Button>
                    </Grid>
                    <Grid item xs={3} sx={{
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
            )
        } else {
            return (
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button variant="contained" onClick={() => newTest()}>Next</Button>
                </Grid>
            )
        }
    }

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }} spacing={2}>
            <TopButtons/>
            <Description/>
            <Editor/>
            <AnswerCorrect/>
            <BottomButtons/>
        </Grid>
    )
}

export default TestMain