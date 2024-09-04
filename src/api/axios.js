import axios from 'axios';

export default axios.create({
    baseURL: "https://emoney-sql-6cdf11cc58bb.herokuapp.com",
    headers: {"ngrok-skip-browser-warning": "true"}
});