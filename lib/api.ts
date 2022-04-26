import { apiCall } from "./const";

const axios = require("axios").default;

export async function getCabins(url:string) {
    const {data} = await axios.get(url)
    try {
    } catch (error) {
    }
    return data
}


