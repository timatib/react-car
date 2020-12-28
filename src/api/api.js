import * as axios from 'axios'

const instance = axios.create({
    withCredentials: false,
    //headers: {"Access-Control-Allow-Origin": "*"},
    baseURL: 'http://193.124.18.152/api/'
    //baseURL: 'http://127.0.0.1:8000/api/'
});

//instance.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const SEARCH_PATH = '/search'
const SEARCH_PARAM = 'query='

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

export const NavBarAPI = {
    getSearchQuery(searchQuery){
        return instance.post(`${SEARCH_PATH}`,{
            search: searchQuery
        }).then(res => res) 
    }
}
