import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});


instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/configure interceptors && all the other cool stuff

export default instance;