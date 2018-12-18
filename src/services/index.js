import { Toast } from 'mint-ui';
import setting from '@/services/config';

const mockMode = false; // 是否使用mock数据
const axios = require('axios');

const baseURL = mockMode ? '' : setting.baseUrl;

axios.interceptors.request.use(config => config,
  error => Promise.reject(error));

axios.interceptors.response.use((res) => {
  if (res.status >= 200 && res.status <= 300) {
    return res;
  }
  // 由后端抛出的错误
  return Promise.reject(res);
}, error => Promise.reject(error));

const catchErrorEvt = function catchErrorEvt(error) {
  switch (error.status) {
    case 422:
      console.log('非法参数');
      break;
    case 500:
      console.log('服务器内部错误');
      break;
    case 401:
      console.log('非法访问');
      break;
    default:
      console.log('其他类型错误');
  }
  Toast('网络错误');
};
function successState(params) {
  if (params.res.data.state === false) {
    Toast(params.res.data.tip);
  }
}
export default (options, data = {}, headers) => {
  const httpOptions = {
    url: baseURL + options.url,
    method: options.method,
    // get 请求时带的参数
    params: Object.assign(data),
    // post 请求的数据
    data: Object.assign(data),
    headers: headers || (options.method === 'get' ? {} : { 'Content-Type': 'application/json;charset=UTF-8' }),
  };
  if (mockMode) {
    httpOptions.url = baseURL + options.mockUrl;
  } else {
    httpOptions.url = baseURL + options.url;
  }
  // 请求协议对应的方法
  if (options.method === 'GET') {
    delete httpOptions.data;
  } else {
    delete httpOptions.params;
  }
  return new Promise((resolve, reject) => {
    axios(httpOptions)
      .then((res) => {
        resolve(res.data);
        successState({
          res,
          url: options.url,
        });
      }).catch((error) => {
        catchErrorEvt(error);
        reject(error);
      });
  });
};
