import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
    console.log(axios.defaults.headers.common);
};

export default setAuthToken;