import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const urlBase = 'http://192.168.1.65:4000/api';


const getToken = async () => {
    let token = await SecureStore.getItemAsync('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}


/* {
    "username": "Mei",
    "email": "mei@api.com",
    "password": "12345678"
} */

const Singnin = async (email, password) => {
    try {
        const credentials = {
            email,
            password
        }
        const { data } = await axios.post(`${urlBase}/auth/signin`, credentials)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const Singup = async (newUser) => {
    try {
        const { data } = await axios.post(`${urlBase}/auth/signup`, newUser)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const Sales = async (sale) => {
    try {
        const { data } = await axios.get(`${urlBase}/products/sales/${sale}`)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const GetAll = async () => {
    try {
        const { data } = await axios.get(`${urlBase}/products`)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const Categories = async (category) => {
    try {
        const { data } = await axios.get(`${urlBase}/products/category/${category}`)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const GetOne = async (id) => {
    try {
        const { data } = await axios.get(`${urlBase}/products/${id}`)
        return data;
    } catch (error) {
        return error.response.data;
    }
}


const Payment = async (dataPayment) => {
    try {
        const config = await getToken();

        const { data } = await axios.post(`${urlBase}/users/payment`, dataPayment, config)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const LibraryUser = async () => {
    try {
        const config = await getToken();
        const { data } = await axios.post(`${urlBase}/users/library`, {}, config)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const VerifyToken = async () => {
    try {
        const config = await getToken();
        const { data } = await axios.post(`${urlBase}/users/verifyToken`, {}, config)
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const Search = async (word) => {
    try {
        const config = await getToken();
        const { data } = await axios.post(`${urlBase}/products/search`, { word }, config);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default {
    Singnin,
    Singup,
    Sales,
    GetAll,
    Categories,
    GetOne,
    Payment,
    LibraryUser,
    VerifyToken,
    Search
};
