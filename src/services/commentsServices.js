import axios from "axios";


const URL = 'https://newsapi.org/v2/everything?q=tesla'

export const fetchNews = async () => {
    const response = await axios.get(URL)

    return response.data
}

export const fetchNewsById = async (id) => {
    const response = await axios.get(`${URL}/${id}`)

    return response.data
}