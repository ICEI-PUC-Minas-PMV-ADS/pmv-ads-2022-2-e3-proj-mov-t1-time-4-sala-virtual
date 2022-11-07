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

const mockedSpecialists = [
    {
        id: 1,
        name: 'Pedro',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: true,
    },
    {
        id: 2,
        name: 'Davison',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: true,
    },
    {
        id: 3,
        name: 'Brunna',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: false,
    },
    {
        id: 4,
        name: 'Sabrina',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: false,
    },
    {
        id: 5,
        name: 'Mateus',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: false,
    },
    {
        id: 6,
        name: 'Paloma',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: true,
    },
    {
        id: 7,
        name: 'Arthur',
        image: null,
        bio: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
        isEven: false,
    },
];

export async function listSpecialists(specialtyId) {
    // try {
    return mockedSpecialists.filter(specialist => specialist.isEven === (specialtyId % 2 === 0));
    // } catch (e) {
    //     throw errHandler(e);
    // }
}

export async function getSpecialist(specialistId) {
    // try {
    return mockedSpecialists.find(specialist => specialist.id === specialistId);
    // } catch (e) {
    //     throw errHandler(e);
    // }
}
