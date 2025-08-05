import { Task, toggleTask, deleteTask } from '../features/tasks/tasksSlice'
import { useDispatch } from 'react-redux'

interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center bg-white shadow p-4 rounded-md mb-2">
      <span
        onClick={() => dispatch(toggleTask(task.id))}
        className={`cursor-pointer ${
          task.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </div>
  )
}
