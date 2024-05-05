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
        setTest: (state, action) => {
            state.test = action.payload
        },
        setTestList: (state, action) => {
            state.testList = action.payload
        }
    }
})

export const {setTestList, setTest} = testListSlice.actions

export default testListSlice.reducer
