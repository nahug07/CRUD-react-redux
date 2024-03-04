import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTaks, editTask } from "../../features/tasks/taskSlice";
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector(state => state.tasks)

    const handleChange = (e: { target: { name: string; value: string } }) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(params.id) {
            dispatch(editTask(task))
        } else {
            dispatch(addTaks({
                ...task,
                id: uuid(),
            }))
        }
        
        navigate('/')
    }

    useEffect(() =>{
        if(params) {
            setTask(tasks.find((task: { id: string | undefined; }) => task.id === params.id))
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Title" onChange={handleChange} value={task?.title}/>
            <textarea name="description" placeholder="Description" onChange={handleChange} value={task?.description}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm