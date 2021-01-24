import  axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer y5TI9xy5D3G9AzvAk9goNWhnRqHbbr2EKtZsVJ8o7V2sAX1UXHGmQTmUklGwlHNpLUVHQgXcE6qByrhIZ4YrlXmqONA-pB0a217IQxIYPko6Ixc4HspInEK8tsQAYHYx',
        
    }
})