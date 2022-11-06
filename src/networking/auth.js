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

export async function listSpecialists(specialtyId) {
    // try {
    return [
        {
            id: 1,
            name: 'Pedro',
            specialtyId: true,
        },
        {
            id: 2,
            name: 'Davison',
            specialtyId: true,
        },
        {
            id: 3,
            name: 'Brunna',
            specialtyId: false,
        },
        {
            id: 4,
            name: 'Sabrina',
            specialtyId: false,
        },
        {
            id: 5,
            name: 'Mateus',
            specialtyId: false,
        },
        {
            id: 6,
            name: 'Paloma',
            specialtyId: true,
        },
        {
            id: 7,
            name: 'Arthur',
            specialtyId: false,
        },
    ].filter(specialist => specialist.specialtyId === (specialtyId % 2 === 0));
    // } catch (e) {
    //     throw errHandler(e);
    // }
}
