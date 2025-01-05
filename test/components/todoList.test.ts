import {mount} from '@vue/test-utils';
import {createTestingPinia} from '@pinia/testing';
import TodoList from '~/components/TodoList.vue';

describe('TodoList.vue', () => {
    it('Рендер списка задач', () => {
        const wrapper = mount(TodoList, {
            global: {
                plugins: [createTestingPinia({
                    initialState: {
                        todo: {todos: [{text: 'Task 1', completed: false}]},
                    },
                })],
            },
        });

        expect(wrapper.text()).toContain('Task 1');
    });
});
