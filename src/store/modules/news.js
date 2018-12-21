import setting from '@/services/config';
import api from '@/services/index';

const news = {
  namespaced: true,
  state: {
  },
  getters: {},
  // 同步操作
  mutations: {
  },
  // 异步操作
  actions: {
    getNewsList(state, params) {
      return new Promise((resolve, reject) => {
        api(setting.urlConfig.getNewsList, params).then((data) => {
          console.log('%c%s', 'color:blue', '=======> 获取新闻列表');
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getRecommendNews(state, params) {
      return new Promise((resolve, reject) => {
        api(setting.urlConfig.getRecommendNews, params).then((data) => {
          console.log('%c%s', 'color:blue', '=======> 获取推荐新闻');
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};
export default news;
