import axios from 'axios';


const urlBase = 'http://192.168.1.65:4000/api';

/* const config = {
    headers: {
        Authorization: `Bearer ${userLogged}`
    }
} */

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

export default { Singnin, Singup, Sales, GetAll, Categories, GetOne };
