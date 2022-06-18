import { atom } from "recoil";
import TodoItemModel from "../models/TodoItemModel";

const todoListState = atom<TodoItemModel[]>({
	key: 'TodoList',
	default: [],
});

export {
	todoListState
}
