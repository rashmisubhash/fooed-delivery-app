import axios from 'axios';

let jwtToken = localStorage.getItem('jwtToken');

export const setJwtToken = (token) => { jwtToken = token};

axios.interceptors.request.use((config) => {
    if(document.getElementsByClassName("ktHroX")[0] !== undefined) document.getElementsByClassName("ktHroX")[0].style.display = "block";
    const token = jwtToken;
    if(token !== undefined && token !== '') {
        if(!config.headers['authorization'] && !config.headers['Authorization'])
            config.headers['Authorization'] = `Bearer ${token}`;
    }
    config['Accept-Encoding'] = 'gzip, compress, deflate, br';
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if(document.getElementsByClassName("ktHroX")[0] !== undefined) document.getElementsByClassName("ktHroX")[0].style.display = "none";
	return response;
}, (error) => {
    if(document.getElementsByClassName("ktHroX")[0] !== undefined) document.getElementsByClassName("ktHroX")[0].style.display = "none";
    if(error.response) {
		error.message = error.response.data
    }
    return Promise.reject(error);
});

export default axios;
