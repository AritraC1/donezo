'use client'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { addTask, Task } from '../features/tasks/tasksSlice'
import TaskItem from '../components/TaskItem'

export default function Home() {
  const [taskText, setTaskText] = useState('')
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!taskText.trim()) return
    dispatch(addTask(taskText))
    setTaskText('')
  }

  return (
    <main className="max-w-xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">✅ Donezo</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
          className="flex-grow border border-gray-300 p-2 rounded-l"
          placeholder="Add a task..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>
      <div>
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </main>
  )
}
