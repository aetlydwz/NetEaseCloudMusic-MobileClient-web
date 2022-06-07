import axios from "axios";

function request(options){
    const instance = axios.create({

        timeout: 8000,
    });
}

export default request;