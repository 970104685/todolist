import { CheckOutlined } from '@ant-design/icons'
// 单个待办事项组件
export function TodoItem({ todo, toggleComplete }: { todo: Todo, toggleComplete: (id: number) => void }) {
  const customClassName = todo.completed ? 'bg-gradient-to-br from-blue-500 to-fuchsia-400' : 'none';
  return (
    <section
      className="flex items-center cursor-pointer text-gray-400 px-4"
      key={todo.id}
      onClick={() => toggleComplete(todo.id)}>
      <div
        className={`w-5 h-5 rounded-full border border-gray-200 mr-2 flex items-center content-center ${customClassName}`}
      >
        <CheckOutlined className='text-white w-2.5 h-3 ml-1' />
      </div>
      <span className={`${todo.completed ? 'line-through' : 'none'}`}>{todo.text}</span>
    </section>
  );
}
