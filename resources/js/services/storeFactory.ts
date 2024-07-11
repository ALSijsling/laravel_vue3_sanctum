import { ref, computed } from 'vue';
import { getRequest, postRequest, updateRequest, deleteRequest } from '../services/http/index';
import { User } from '../domains/auth/types'

export const storeModuleFactory = (moduleName: string) => {
    const state = ref<Array<User>>([]);

    const getters = {
        all: computed(() => Object.values(state.value))
    };

    const setters = {
        setAll: (items: Array<User>) => {
            items.forEach(item => {
                state.value[item.id] = item;
            });
        },

        setById: (item: User) => {
            state.value[item.id] = item;
        }
    };

    const actions = {
        getAll: async() => {
            const {data} = await getRequest('moduleName');
            if (!data) return
            setters.setAll(data);
        },
        
        getById: async(id: number) => {
            const {data} = await getRequest(`moduleName/${id}`);
            if (!data) return
            setters.setById(data);
        },

        create: (endpoint: string, item: User) => {
            const {} = postRequest(endpoint, item);
            setters.setById(item);
        },

        update: (endpoint: string, item: User) => {
            const {} = updateRequest(endpoint, item);
            setters.setById(item);
        },

        delete: (endpoint: string, item: User) => {
            const {} = deleteRequest(endpoint, {item});
        }
    }

    return {
        getters,
        actions
    };
}