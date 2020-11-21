import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true, 
    baseURL: 'http://193.124.18.152/api/' 
});

export const carsAPI = {
    getBrands() {
        return instance.get(`brands`);
    },
}
