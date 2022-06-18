import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import TodoItemModel from "../models/TodoItemModel";
import { todoListState } from "../states/atoms";
import Button from "./Button";
import "./styles/CreateTodo.css"

function CreateTodo() {

	const setTodos = useSetRecoilState(todoListState);
	const inputNameRef = useRef<HTMLInputElement>(null)

	return (
		<>
			<div className="RootCreateTodo">
				<input ref={inputNameRef} className="RootCreateTodoInputText" type="text" />
				<Button icon="im-plus" onClick={() => {
					if (inputNameRef.current?.value) {
						const value: string = inputNameRef.current?.value;
						setTodos((oldTodos) => [
							...oldTodos,
							new TodoItemModel(value)
						]);
					}
				}}></Button>
			</div>
		</>
	);
}

export default CreateTodo;