import axiosClient from './axiosClient'


const availabilityApi = {
  get: (id, type) => {
    const url = `/apartments/city/${id}/apartment?type=${type}`;
    return axiosClient.get(url);
  }
}

export default availabilityApi; 
 