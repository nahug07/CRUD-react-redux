import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice ({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTaks: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})

export const {addTaks, deleteTask} = taskSlice.actions

export default taskSlice.reducer