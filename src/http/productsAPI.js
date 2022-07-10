import { $host } from './index.js';

export const getProductsByShopName = async (shopName) => {
    const { data } = await $host.get('https://mern-delivery-app.herokuapp.com/api/products/' + shopName);
    return data;
}
