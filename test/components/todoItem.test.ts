import {mount} from '@vue/test-utils';
import {createTestingPinia} from '@pinia/testing';
import TodoItem from '~/components/TodoItem.vue';
import {useTodoStore} from '~/store/todo';

describe('TodoItem.vue', () => {
    it('Рендер задачи в списке', () => {
        const wrapper = mount(TodoItem, {
            props: {
                todo: {text: 'Task 1', completed: false},
                index: 0,
            },
            global: {
                plugins: [createTestingPinia()],
            },
        });

        expect(wrapper.text()).toContain('Task 1');
        expect(wrapper.text()).toContain('Complete');
        expect(wrapper.text()).toContain('Remove');
    });

    it('Добавления задачи при нажатии на кнопку Complete', async () => {
        const wrapper = mount(TodoItem, {
            props: {
                todo: {text: 'Task 1', completed: false},
                index: 0,
            },
            global: {
                plugins: [createTestingPinia()],
            },
        });

        const todoStore = useTodoStore();
        const button = wrapper.find('button');

        await button.trigger('click');
        expect(todoStore.toggleTodo).toHaveBeenCalledWith(0);
    });

    it('Удаления задачи при нажатии на кнопку Remove', async () => {
        const wrapper = mount(TodoItem, {
            props: {
                todo: {text: 'Task 1', completed: false},
                index: 0,
            },
            global: {
                plugins: [createTestingPinia()],
            },
        });

        const todoStore = useTodoStore();
        const removeButton = wrapper.findAll('button')[1];

        await removeButton.trigger('click');
        expect(todoStore.removeTodo).toHaveBeenCalledWith(0);
    });
});
