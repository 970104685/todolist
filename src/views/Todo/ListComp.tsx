import { List } from "antd";
import { TodoItem } from "./TodoItem";

interface ListProps {
  todos: Todo[]
  toggleComplete: (id: number) => void
  toggleAll: () => void
  clearAll: () => void
}

export function ListComp({ todos, toggleComplete, toggleAll, clearAll }: ListProps) {
  const incompleteNumber = todos.filter((todo) => !todo.completed).length;
  return (
    <section className="shadow-xl shadow-[#d6d9f8]">
      <List
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
            <TodoItem todo={item} toggleComplete={toggleComplete} />
          </List.Item>
        )}
      />
      <div className="px-4 flex justify-between items-center py-2 text-gray-400">
        <div>{incompleteNumber} items left</div>
        <div onClick={toggleAll} className="cursor-pointer">All Active Completed</div>
        <div onClick={clearAll} className="cursor-pointer">clear Completed</div>
      </div>
    </section>
  )
}