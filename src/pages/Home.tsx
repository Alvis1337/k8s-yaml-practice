import {Grid} from "@mui/material"
import {useEffect, useState} from "react";
import {yamlTests} from "../utils/yamlTests";
import {getUnsolvedTests} from "../utils/baseFuncs.tsx";
import TestMain from "../components/TestMain.tsx";
import TestBegin from "../components/TestBegin.tsx";
import TestsSolved from "../components/TestsSolved.tsx";
import {
    setTestListState,
    setTestState,
    setTestStateAllUnsolved,
    setTestStateSolved
} from "../store/silces/testListSlice.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {TestState} from "../utils/testTypes.ts";

const Home = () => {
    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState('')

    const test = useAppSelector((state) => state.testState.test)

    const [renderedTest, setRenderedTest] = useState(test)

    const testList = useAppSelector((state) => state.testState.testList)

    // need to keep track of the rendered test, so we can update the component when the test changes
    useEffect(() => {
        setRenderedTest(test)
    }, [test])

    const startTest = () => {
        dispatch(setTestListState(yamlTests))
        dispatch(setTestState(yamlTests[0]))
    }

    const setSolved = (test: TestState) => {
        dispatch(setTestStateSolved(test.name));
        dispatch(setTestState({...test, solved: true}));
    }

    const resetTestList = () => {
        setInputValue('')
        dispatch(setTestStateAllUnsolved())
    }

    // if the current test gets solved, remove it fromt he testlist and set the next test
    useEffect(() => {
        if (test.solved) {
            const newTestList = testList.filter((t) => t.name !== test.name)
            dispatch(setTestListState(newTestList))
            newTest()
        }
    }, []);


    const newTest = () => {
        const unsolvedTests = getUnsolvedTests(testList)
        if (unsolvedTests.length > 0) {
            console.log('unsolved test length was larger than 0')
            dispatch(setTestState(unsolvedTests[0]))
            setInputValue('')
        } else {
            console.log('unsolved test length was 0')
            dispatch(setTestListState(testList))
            dispatch(setTestState(yamlTests[0]))
        }
    }

    // if the test list is not the same as the yamlTests, update the test list
    useEffect(() => {
        dispatch(setTestListState(testList))
    }, [testList, dispatch])

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid item xs={12} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2
            }}>
                {test.description === '' ? <TestBegin startTestFunc={startTest}/> : (
                    getUnsolvedTests(testList).length > 0 ? (
                        <TestMain
                            yamlInput={inputValue}
                            setYamlInput={setInputValue}
                            yamlTest={renderedTest}
                            setSolvedFunc={setSolved}
                            newTestFunc={newTest}
                            resetTestListFunc={resetTestList}
                            yamlTests={testList}
                        />
                    ) : (
                        <TestsSolved resetTestListFunc={resetTestList}/>
                    )
                )}
            </Grid>

        </Grid>
    )
}
export default Home