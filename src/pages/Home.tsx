import {Grid} from "@mui/material"
import {useState} from "react";
import {yamlTests} from "../utils/yamlTests";
import {getUnsolvedTests} from "../utils/baseFuncs.tsx";
import {TestState} from "../utils/testTypes.ts";
import TestMain from "../components/TestMain.tsx";
import TestBegin from "../components/TestBegin.tsx";
import TestsSolved from "../components/TestsSolved.tsx";

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [test, setTest] = useState<TestState>({
        name: '',
        yaml: '',
        description: '',
        solved: false,
        categories: ['']
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

    const solveAllTests = () => {
        const newTestList = testList.map((t) => {
            t.solved = true
            return t
        })
        setTestList(newTestList)
    }

    const newTest = () => {
        const unsolvedTests = getUnsolvedTests(yamlTests)
        if (unsolvedTests.length > 0) {
            setTest(unsolvedTests[0])
            setInputValue('')
        } else {
            setTestList(yamlTests)
            setTest(yamlTests[0])
        }
    }

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {test.description === '' ? <TestBegin startTestFunc={startTest}/> : (
                getUnsolvedTests(yamlTests).length > 0 ? (
                        <TestMain
                            yamlInput={inputValue}
                            setYamlInput={setInputValue}
                            yamlTest={test}
                            setSolvedFunc={setSolved}
                            newTestFunc={newTest}
                            resetTestListFunc={resetTestList}
                            solveAllTestsFunc={solveAllTests}
                        />
                    ) : (
                        <TestsSolved resetTestListFunc={resetTestList}/>
                    )
            )}
        </Grid>
    )
}
export default Home