<script setup lang="ts">
import {useTodoStore} from '~/store/todo';

interface Todo {
  text: string;
  completed: boolean;
}

const props = defineProps<{
  todo: Todo;
  index: number;
}>();

const todoStore = useTodoStore();

const toggleTodo = (): void => {
  todoStore.toggleTodo(props.index);
};
const removeTodo = (): void => {
  todoStore.removeTodo(props.index);
};
</script>

<template>
  <li>
    <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="toggleTodo">
      {{ todo.completed ? 'Undo' : 'Complete' }}
    </button>
    <button @click="removeTodo">Remove</button>
  </li>
</template>

<style scoped>
button {
  margin-left: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
}
</style>
