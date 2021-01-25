import axiosClient from './axiosClient';

const apartmentApi = {
    getAll: (params) => {
        const url = '/apartment';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/apartment/${id}`;
        return axiosClient.get(url);
    }
}
    
export default apartmentApi;