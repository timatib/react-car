import * as axios from 'axios'

const instance = axios.create({
    withCredentials: false, 
    baseURL: 'http://193.124.18.152/api/' 
    //baseURL: 'http://127.0.0.1:8000/api/' 
});

export const carsAPI = {
    getBrands() {
        return instance.get('brands').then(data => data.data)
    },
    getModels(brand) {
        return instance.get(`brands/${brand}`).then(data => data.data);
    },
    getDescription(brand, carId){
        return instance.get(`brands/${brand}/${carId}`).then(data => data.data)
    }
}
