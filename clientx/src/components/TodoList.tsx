import { useRecoilValue } from "recoil";
import { todoListState } from "../states/atoms";
import TodoItem from "./TodoItem";
import "./styles/TodoList.scss"

function TodoList() {

	const todos = useRecoilValue(todoListState);

	const todosUI = todos.map((item) => <TodoItem key={item.id} item={item}></TodoItem>)

	return (
		<div className="TodoListRoot">
			{todosUI}
		</div>
	);
}

export default TodoList;