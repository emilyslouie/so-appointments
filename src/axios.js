import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://so-appointments.firebaseio.com/'
});

export default instance;