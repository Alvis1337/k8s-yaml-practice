import {Button, Grid, Typography} from "@mui/material"
import {useEffect, useState} from "react";
import {yamlTests} from "../utils/yamlTests";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';


const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [test, setTest] = useState({
        name: '',
        yaml: '',
        description: '',
        solved: false
    })
    const [testList, setTestList] = useState(yamlTests)

    useEffect(() => {
        setTestList(yamlTests)
    }, []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * testList.length)
        setTest(testList[randomIndex])
    }, [testList]);

    useEffect(() => {
        if (test) {
            setTest({
                ...test,
                solved: test.yaml === inputValue
            })
        }
    }, [inputValue]);

    const newTest = () => {
        setInputValue('')
        if (!test) {
            setTestList(yamlTests)
        } else {
            setTestList(testList.filter((t) => t.name !== test.name))
        }
    }

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {test ? (
                <>
                    <Grid item xs={12} sx={{
                        py: 2
                    }}>
                        <Typography variant={"body1"}>
                            {testList.length} tests remaining
                        </Typography>
                        {test.name ? <Typography variant="h2">
                                {test.name}
                            </Typography> :
                            <Typography variant="h2" color={'red'}>
                                No Test Found
                            </Typography>}
                    </Grid>

                    <Grid item xs={8} sx={{
                        py: 2
                    }}>
                        {test.description ? <Typography variant="h4">
                                {test.description}
                            </Typography> :
                            <Typography variant="h4" color={'red'}>
                                No Description Found
                            </Typography>}
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
                        {test.solved ? <Typography variant="h2" color={'green'}>Correct</Typography> :
                            <Typography variant="h2" color={'red'}>Incorrect</Typography>}
                    </Grid>
                    {}
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
                            <Button variant="contained" onClick={() => newTest()}>New Test</Button>
                        </Grid>
                    </Grid>
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
                        <Button variant="contained" onClick={() => setTestList(yamlTests)}>Reset</Button>
                    </Grid>
                </Grid>
            )}

        </Grid>
    )
}

// <Grid container sx={{
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
// }}>
//     <Grid item xs={12} sx={{whiteSpace: "pre-wrap"}}>
//         <Typography variant="h4">
//             {inputValue}
//         </Typography>
//     </Grid>
//     <Grid item xs={12} sx={{whiteSpace: "pre-wrap"}}>
//         <Typography variant="h4">
//             {test.yaml}
//         </Typography>
//     </Grid>
// </Grid>
export default Home