import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";

const store = configureStore ({
    reducer: {
       tasks: tasksReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 


export default store