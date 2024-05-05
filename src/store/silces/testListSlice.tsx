import {createSlice} from "@reduxjs/toolkit";

const initialState = {
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
        setTestState: (state, action) => {
            state.test = action.payload
        },
        setTestListState: (state, action) => {
            state.testList = action.payload
        }
    }
})

export const {setTestListState, setTestState} = testListSlice.actions

export default testListSlice.reducer
