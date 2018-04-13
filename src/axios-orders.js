import axios from 'axios';

const ordersInstance=axios.create({
    baseURL:'https://yetl-90ede.firebaseio.com/'
});

export default ordersInstance;