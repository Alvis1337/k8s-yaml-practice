import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestState } from "../../utils/testTypes.ts";


// Define the type for your state
interface TestListState {
    test: TestState;
    testList: TestState[];
}

const initialState: TestListState = {
    test: {
        name: '',
        yaml: '',
        description: '',
        solved: false,
        categories: ['']
    },
    testList: []
}

export const testListSlice = createSlice({
    name: 'testList',
    initialState,
    reducers: {
        setTestState: (state, action: PayloadAction<TestState>) => {
            console.log('setting test state')
            state.test = action.payload
        },
        setTestListState: (state, action: PayloadAction<TestState[]>) => {
            console.log('setting test list state')
            state.testList = action.payload
        },
        setTestStateAllSolved: (state) => {
            state.testList = state.testList.map((t) => {
                console.log(`setting ${t.name} to solved`)
                t.solved = true; // TypeScript error here, we need to make a copy of the test object
                return t;
            })
        },
        setTestStateSolved: (state, action: PayloadAction<string>) => {
            console.log(action.payload)

            state.testList = state.testList.map((t) => {
                if (t.name === action.payload) {
                    console.log(`setting ${t.name} to solved`)
                    t.solved = true;
                }
                return t;
            })
        },
        setTestStateUnsolved: (state, action: PayloadAction<string>) => {
            state.testList = state.testList.map((t) => {
                console.log(`setting ${t.name} to unsolved`)
                if (t.name === action.payload) {
                    t.solved = false;
                }
                return t;
            })
        },
        setTestStateAllUnsolved: (state) => {
            state.testList = state.testList.map((t) => {
                console.log(`setting ${t.name} to unsolved`)
                t.solved = false; // TypeScript error here, we need to make a copy of the test object
                return t;
            })
        }
    }
})

export const { setTestListState, setTestState, setTestStateAllSolved, setTestStateSolved, setTestStateUnsolved, setTestStateAllUnsolved } = testListSlice.actions

export default testListSlice.reducer
