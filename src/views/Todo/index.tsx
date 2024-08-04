import { useState } from'react'
import { InputComp } from './InputComp'
import { ListComp } from './ListComp'
import Image from '../../assets/outdoors-wallhere.jpg'

// 待办事项列表组件
function Todo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Coding.', completed: false },
    { id: 2, text: 'Run for 30 minutes.', completed: false },
    { id: 3, text: '10 minutes meditation.', completed: false },
    { id: 4, text: 'Read for 1 hour.', completed: false },
    { id: 5, text: 'Watch the Olympic Games.', completed: false },
  ])

  const [newTodoText, setNewTodoText] = useState('')

  const addTodo = () => {
    if (newTodoText.trim()!== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: newTodoText,
        completed: false
      }
      setTodos([...todos, newTodo])
      setNewTodoText('')
    }
  }

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed } : todo)
    )
  }

  const toggleAll = () => {
    setTodos(
      todos.map(todo => ({...todo, completed: true}))
    )
  }

  return (
    <section className="relative w-full">
      <section className="w-full h-64 bg-gray-100 absolute left-0 top-0 -z-10">
        <section className='h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${Image})`}}/>
        <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-blue-400 opacity-50'></div>
      </section>
      <section className="w-3/12 mx-auto pt-12">
        <h1 className="text-3xl font-medium text-white pb-12">TODO</h1>
        <section>
          <InputComp 
            addTodo={addTodo}
            newTodoText={newTodoText}
            setNewTodoText={setNewTodoText}
          />
        </section>
        <section className='bg-white rounded-lg mt-6'>
          <ListComp
            todos={todos}
            toggleComplete={toggleComplete}
            toggleAll={toggleAll}
            clearAll={() => setTodos([]) }
          />
        </section>
      </section>
    </section>
  )
}

export default Todo