enum TodoItemModelState {
	done = "done",
	open = "open",
	inprogress = "inprogress"
}

class TodoItemModel {
	id: string;
	name: string;
	state: TodoItemModelState = TodoItemModelState.open;

	public static nextState(state: TodoItemModelState): TodoItemModelState {
		switch (state) {
			case TodoItemModelState.open:
				return TodoItemModelState.inprogress;
			case TodoItemModelState.inprogress:
				return TodoItemModelState.done;
			case TodoItemModelState.done:
				return TodoItemModelState.open;
		}
	}

	public constructor(name: string) {
		this.name = name;
		this.id = crypto.randomUUID()
	}


	public copy(): TodoItemModel {
		const newItem = new TodoItemModel(this.name);
		newItem.id = this.id;
		newItem.state = this.state;
		return newItem;
	}
}

export default TodoItemModel;
