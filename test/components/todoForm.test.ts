import {describe, it, expect, vi} from 'vitest';
import {mount} from '@vue/test-utils';
import {createTestingPinia} from '@pinia/testing';
import TodoForm from '~/components/TodoForm.vue';
import {useTodoStore} from '~/store/todo';

describe('TodoForm.vue', () => {
    it('Добавляет новую задачу при вводе текста и нажатии Enter', async () => {
        const wrapper = mount(TodoForm, {
            global: {
                plugins: [createTestingPinia()],
            },
        });

        const todoStore = useTodoStore();
        const input = wrapper.find('input');

        await input.setValue('New Task');
        await input.trigger('keyup.enter');

        expect(todoStore.addTodo).toHaveBeenCalledWith('New Task');
        expect(input.element.value).toBe('');
    });
});
