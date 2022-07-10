import { $host } from './index.js';

export const getShops = async () => {
    const { data } = await $host.get('https://mern-delivery-app.herokuapp.com/api/shops/');
    return data;
};
