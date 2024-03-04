import { Key } from "react";
import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../../features/tasks/taskSlice";
import { Link } from "react-router-dom";

interface Task{
    id: Key;
    title: String;
    description: String;
    done: Boolean;
}

function TasksList(){

    const tasks  = useSelector(state => state.tasks)
    const dispatch = useDispatch();

    const handleDelete = (id: Key) => {
        dispatch(deleteTask(id))
    }

    return (
        <>
        <header>
            <h1>Taks {tasks.length}</h1>
            <Link to={'/create-task'}>
                Create Task
            </Link>
        </header>

        {tasks.map((task: Task ) => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <Link to={'/edit-task/' + task.id}>Edit</Link>
            </div>
        ))}
        </>
    )
}

export default TasksList