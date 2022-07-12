import Axios, { AxiosInstance } from 'axios'

export const clientHttp: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/"
})