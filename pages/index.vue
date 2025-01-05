<template>
  <div>
    <h1>Todo App</h1>
    <to-do-form/>
    <to-do-List/>
  </div>
</template>

<script setup lang="ts">
import ToDoForm from '~/components/TodoForm.vue';
import ToDoList from '~/components/TodoList.vue';
</script>
