<script setup lang="ts">
import {useTodoStore} from '~/store/todo';
import ToDoItem from '~/components/ToDoItem.vue';

const todoStore = useTodoStore();
const todos = todoStore.todos;
</script>

<template>
  <ul>
    <to-do-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
    />
  </ul>
</template>

<style module lang="scss">
.ToDoList {
  //
}
</style>
