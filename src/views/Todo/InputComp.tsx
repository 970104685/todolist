import { Input } from "antd";

// 输入和添加待办事项组件
export function InputComp({ addTodo, newTodoText, setNewTodoText }: { addTodo: () => void, newTodoText: string, setNewTodoText: (value: string) => void }) {
  return (
    <div>
      <Input
        className="h-10"
        placeholder="create a new todo..."
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        onPressEnter={addTodo}
      />
    </div>
  );
}