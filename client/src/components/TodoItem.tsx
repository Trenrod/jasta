import { useRecoilState } from "recoil";
import TodoItemModel, { TodoItemModelState } from "../models/TodoItemModel";
import { todoListState } from "../states/atoms";
import Button from "./Button";
import "./styles/TodoItem.scss"

interface ITodoItemProps {
	item: TodoItemModel
}

const TodoItem = function (props: ITodoItemProps) {

	const [todoList, setTodoList] = useRecoilState(todoListState);
	const idxTodoListAtom = (todoList.findIndex((item) => (item.id === props.item.id)))

	const toggleDone = () => {
		setTodoList((oldTodos) => {
			const newTodo = oldTodos[idxTodoListAtom].copy();
			newTodo.state = TodoItemModel.nextState(newTodo.state);

			const newTodoList = [
				...oldTodos.slice(0, idxTodoListAtom),
				newTodo,
				...oldTodos.slice(idxTodoListAtom + 1),
			]
			return newTodoList;
		});
	};

	const cssPostfix = todoList[idxTodoListAtom].state;

	let statePostfix = "";
	switch (todoList[idxTodoListAtom].state) {
		case TodoItemModelState.open:
			statePostfix = "created by ado";
			break;
		case TodoItemModelState.inprogress:
			statePostfix = "ado is working on it";
			break;
		case TodoItemModelState.done:
			statePostfix = "done by ado";
			break;
	}

	return (
		<div className="TodoItemRoot">
			<div className={"TodoItemText_" + cssPostfix} onClick={() => { toggleDone(); }}>
				<span>{props.item.name}</span><span className="TodoItemTextInfo"> {statePostfix}</span>
			</div>
			<Button icon="im-x-mark"></Button>
			<Button icon="im-pencil"></Button>
			<Button text="Reset"></Button>
		</div >
	)
}

export default TodoItem;