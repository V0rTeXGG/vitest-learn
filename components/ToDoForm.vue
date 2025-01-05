<script setup lang="ts">
import {useTodoStore} from '~/store/todo';

const newTodo = ref<string>('');
const todoStore = useTodoStore();

const addTodo = (): void => {
  todoStore.addTodo(newTodo.value);
  newTodo.value = '';
};
</script>

<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a todo"/>
  </div>
</template>

<style module lang="scss">
.ToDoForm {
  //
}
</style>
