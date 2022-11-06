import {api, errHandler} from './api';

export function getInstance() {
    return api;
}

export async function register(type, data) {
    try {
        let res = await api.post(`/auth/register/${type}`, data);
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}

export async function getProfile() {
    try {
        let res = await api.get('/user/profile');
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}

export async function login(data) {
    try {
        let res = await api.post('/auth/login', data);
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}

export async function listCategories() {
    try {
        let res = await api.get('/specialty/categories');
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}

export async function listSpecialties(categoryId) {
    try {
        let res = await api.get(`/specialty/specialties/${categoryId}`);
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}
