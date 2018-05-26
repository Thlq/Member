import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://zfbhytest.miyapay.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use((config) => {
	//在发送请求之前做某件事
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    };
    return config;
},(error) =>{
    return Promise.reject(error);
});

axios.interceptors.response.use((res) =>{
	//对响应数据做些事
    if(res.status!=200){
        return Promise.reject(res);
    };
    return res;
}, (error) => {
    return Promise.reject(error);
});


export default function thlq (url,params) {
	return new Promise((resolve,reject)=>{
		axios.post(url,params).then(res=>{
			resolve(res.data);
		}).catch(error=>{
			reject(error);
		})
	})
}