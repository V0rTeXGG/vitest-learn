import {mount} from '@vue/test-utils';
import {createTestingPinia} from '@pinia/testing';
import IndexPage from '~/pages/index.vue';

describe('IndexPage.vue', () => {
    it('Рендер компонентов', () => {
        const wrapper = mount(IndexPage, {
            global: {
                plugins: [createTestingPinia()],
            },
        });
        expect(wrapper.findComponent({name: 'ToDoForm'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'ToDoList'}).exists()).toBe(true);
    })
});
