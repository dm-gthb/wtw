import axios from 'axios';

const BACKEND_URL = ``;
const REQUEST_TIMEOUT = 5000;

export default axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
