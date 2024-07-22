import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {solvedCount : 0, correctCount : 0, answers: {}}
const examSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
        increamentCount(state) {
            state.solvedCount ++
        },
        increamentCorrectCount(state) {
            state.correctCount ++
        },
        addAnswer(state, action){
            state.answers[action.payload.key] = action.payload.value
        }
    }
})


export const examActions = examSlice.actions

const store = configureStore({reducer:{exam: examSlice.reducer}})

export default store
