import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID f3b4f476c24427d6092f4b8e264b1cfcc7ec032f270d15d07230821d474ca00f'}
});