import axios from 'axios';

//@ts-ignore
const hostBackendUrl = 'https://whiskers-be-20f5dcb585e5.herokuapp.com/';
//@ts-ignore
const localBackendUrl = 'http://localhost:3000/';

//@ts-ignore
const dockerBackendUrl = 'http://spinforwhisk.com:4001/';

export const Instance = axios.create({
    baseURL: localBackendUrl,
    headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
    },
});

