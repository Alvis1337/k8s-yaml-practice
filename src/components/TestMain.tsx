import {Button, Grid, Typography} from "@mui/material";
import {checkAnswer, getUnsolvedTests} from "../utils/baseFuncs.tsx";
import {yamlTests} from "../utils/yamlTests.tsx";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';
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
    setSolvedFunc: (test: { name: string; yaml?: string; description?: string; solved?: boolean; }) => void;
    newTestFunc: () => void;
    resetTestListFunc: () => void;
    solveAllTestsFunc: () => void;
}

const TestMain = ({ yamlInput, setYamlInput, yamlTest, setSolvedFunc, newTestFunc, resetTestListFunc, solveAllTestsFunc }: TestMainProps) => {
    const inputValue = yamlInput
    const setInputValue = setYamlInput
    const resetTestList = resetTestListFunc
    const test = yamlTest
    const setSolved = setSolvedFunc
    const newTest = newTestFunc
    const solveAllTests = solveAllTestsFunc

    return (
        <>
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
                    <Typography variant={"body1"}>
                        {getUnsolvedTests(yamlTests).length} tests remaining
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
                <Grid item xs={3} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 2
                }}>
                    <Button variant="contained" onClick={() => solveAllTests()}>Solve All</Button>
                </Grid>
            </Grid>
            <Grid item xs={8} sx={{
                py: 2
            }}>
                <Typography variant="body1">
                    {test.description}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{
                py: 2,
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
            <Grid item xs={12} sx={{
                py: 2
            }}>
                {test.solved && <Typography variant="h2" color={'green'}>Correct</Typography>}
            </Grid>

            {!test.solved ? (
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
                        py: 2
                    }}>
                        <Button variant="contained" onClick={() => setInputValue('')}>Clear</Button>
                    </Grid>
                    <Grid item xs={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 2
                    }}>
                        <Button variant="contained"
                                onClick={() => checkAnswer(inputValue, test.yaml) ? setSolved(test) : null}>Check</Button>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 2
                }}>
                    <Button variant="contained" onClick={() => newTest()}>Next</Button>
                </Grid>
            )}
        </>
    )
}

export default TestMain