import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 1,
      title: "test",
      description: "description test",
    },
  ],
  reducers: {
    addTaks: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },

    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const foundTask = state.find((task) => task.id === id);

      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
  },
});

export const { addTaks, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
