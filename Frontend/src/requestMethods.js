import axios from "axios"
 
const URL = "http://localhost:5000/api"

export const userRequest = axios.create({
    baseURL: URL

})