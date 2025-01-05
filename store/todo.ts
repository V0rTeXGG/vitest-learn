import {defineStore} from 'pinia';

interface Todo {
    text: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Todo[],
    }),
    actions: {
        addTodo(text: string) {
            if (text.trim()) {
                this.todos.push({text, completed: false});
            }
        },
        toggleTodo(index: number) {
            if (this.todos[index]) {
                this.todos[index].completed = !this.todos[index].completed;
            }
        },
        removeTodo(index: number) {
            this.todos.splice(index, 1);
        },
    },
});
