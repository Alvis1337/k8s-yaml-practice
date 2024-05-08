import {Grid} from "@mui/material"
import {useEffect} from "react";
import {yamlTests} from "../utils/yamlTests";
import {getUnsolvedTests} from "../utils/baseFuncs.tsx";
import TestMain from "../components/TestMain.tsx";
import TestBegin from "../components/TestBegin.tsx";
import TestsSolved from "../components/TestsSolved.tsx";
import {
    setTestListState,
    setTestState,
} from "../store/silces/testListSlice.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import Tests from "./Tests.tsx";

const Home = () => {
    const dispatch = useAppDispatch()


    const test = useAppSelector((state) => state.testState.test)

    const testList = useAppSelector((state) => state.testState.testList)

    const startTest = () => {
        dispatch(setTestListState(yamlTests))
        dispatch(setTestState(yamlTests[0]))
    }

    // if the test list is not the same as the yamlTests, update the test list
    useEffect(() => {
        dispatch(setTestListState(testList))
    }, [testList, dispatch])

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid item xs={12} md={6} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2,
            }}>
                {test.description === '' ? <TestBegin startTestFunc={startTest}/> : (
                    getUnsolvedTests(testList).length > 0 ? (
                        <TestMain/>
                    ) : (
                        <TestsSolved/>
                    )
                )}
            </Grid>

            {test.description !== '' && (
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 2
                }}>
                    <Tests/>
                </Grid>
            )}

        </Grid>
    )
}
export default Home