import {Button, Grid, Typography} from "@mui/material";
import {checkAnswer} from "../utils/baseFuncs.tsx";
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
                  }: TestMainProps) => {
    const inputValue = yamlInput
    const setInputValue = setYamlInput
    const test = yamlTest
    const setSolved = setSolvedFunc
    const newTest = newTestFunc

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

    const BottomButtons = () => {
            return (
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
            )
    }

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }} spacing={2}>
            {!test.solved ? (
                <>
                    <Description/>
                    <Editor/>
                    <BottomButtons/>
                </>
            ) : (
                <>
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
                </>
            )
            }

        </Grid>
    )
}

export default TestMain