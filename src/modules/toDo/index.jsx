import React, { useState } from 'react'
import toast from 'react-hot-toast'

function ToDo() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const [editing, setEditing] = useState(false)
    const [editedIndex, setEditedIndex] = useState(null)

    const handleTask = () => {
        if (editing) {
            const updatedData = taskList.map((el, i) => i === editedIndex ? task : el)
            setTaskList(updatedData)
            setTask('')
            setEditing(false)
            toast.success('Data successfully Update')
        } else {
            setTaskList([...taskList, task])
            setTask('')
            toast.success('Data successfully Added')
        }
    }

    const handleEdit = (el, i) => {
        setTask(el);
        setEditing(true);
        setEditedIndex(i)
    }

    const handleDelete = (deletedInd) => {
        const ans = window.confirm('Are you sure really want to delete this data')
        if (ans) {
            const updatedData = taskList.filter((_, i) => i !== deletedInd)
            setTaskList(updatedData)
            toast.success('Data successfully Deleted')
        }
    }

    return (
        <div>
            <label htmlFor='task'>Enter task</label>
            <input type='text' id='task' name='task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleTask}>{editing ? 'Update' : 'Add'} task</button>
            <div>
                {taskList.map((el, i) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>{el}</p>
                            {!editing && <span onClick={() => handleEdit(el, i)}>Edit</span>}
                            {!editing && <span onClick={() => handleDelete(i)}>Delete</span>}
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default ToDo
