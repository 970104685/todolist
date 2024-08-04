declare namespace Todo {
  type InputType = {
    text: string
    id: number
  }
}

interface InputType {
  text: string
  id: number
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
