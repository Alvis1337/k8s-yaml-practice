import {Button, Grid, Typography} from "@mui/material"
import {useState} from "react";
import {yamlTests} from "../utils/yamlTests";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';
import {checkAnswer} from "../utils/baseFuncs.tsx";

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [test, setTest] = useState({
        name: '',
        yaml: '',
        description: '',
        solved: false
    })
    const [testList, setTestList] = useState(yamlTests)

    const startTest = () => {
        setTestList(yamlTests)
        setTest(yamlTests[0])
    }

    const setSolved = (test: { name: string; yaml?: string; description?: string; solved?: boolean; }) => {
        const newTestList = testList.map((t) => {
            if (t.name === test.name) {
                t.solved = true
            }
            return t
        })
        setTestList(newTestList)
    }

    const resetTestList = () => {
        setInputValue('')
        setTestList(yamlTests.map((t) => {
            t.solved = false
            return t
        }))
    }

    const newTest = () => {
        //     find a test from the list that is not solved
        //     set that test
        const unsolvedTests = getUnsolvedTests()
        if (unsolvedTests.length > 0) {
            setTest(unsolvedTests[0])
            setInputValue('')
        } else {
            setTestList(yamlTests)
            setTest(yamlTests[0])
        }
    }

    const getUnsolvedTests = () => {
        return testList.filter((t) => !t.solved)
    }

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {getUnsolvedTests().length > 0 ? (
                <>
                    {test.description ?
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
                                        {getUnsolvedTests().length} tests remaining
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
                            <Grid item xs={8} sx={{
                                py: 2
                            }}>
                                <Typography variant="body1">
                                    {test.description}
                                </Typography>
                            </Grid>
                        </>
                        :
                        <Grid item xs={8} sx={{
                            py: 2
                        }}>
                            <Button variant="contained" onClick={() => startTest()}>Begin</Button>
                        </Grid>
                    }

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
            ) : (
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
                        <Typography variant="h2" color={'green'}>
                            All test completed
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
            )}

        </Grid>
    )
}
export default Home