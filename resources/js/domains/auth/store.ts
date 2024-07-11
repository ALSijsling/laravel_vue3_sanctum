import { ref } from 'vue';
import { getRequest, postRequest, updateRequest, deleteRequest } from '../../services/http';
import { User } from './types';

export const loginUser = (endpoint: string, item: User) => {
    const {} = postRequest(endpoint, item);
};