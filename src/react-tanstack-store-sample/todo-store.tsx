import { INITIAL_TODO_DATA } from "../data";
import { Todo } from "../model";
import { debounceTime, Subject } from 'rxjs';

import { Store, useStore } from "@tanstack/react-store";

const todoStore = new Store<Todo[]>(INITIAL_TODO_DATA);
const todoCheckedStore = new Store<Record<number, boolean>>({});

export const useTodoStore = () => useStore(todoStore);
export const useTodoCheckedStore = () => useStore(todoCheckedStore);
export const updateTodoCheckStore = (newState: Record<number, boolean>) =>
  todoCheckedStore.setState(() => newState);

export const updateTodoCheckStoreById = (id: number) =>
  todoCheckedStore.setState((state) => {
    const checked = !state[id];
    if (checked) {
      return {
        ...state,
        [id]: true,
      };
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _removed, ...newState } = state;
      return newState;
    }
  });
  
const checkSubject = new Subject<Record<number, boolean>>();

todoCheckedStore.subscribe((state) => {
  checkSubject.next(state.currentVal);
});

checkSubject.pipe(
  debounceTime(2000)
).subscribe((state) => {
  console.log("Update in the DB", state);
});
