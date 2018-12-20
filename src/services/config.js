export default {
  baseUrl: 'http://hufe.club:7002/api/',
  urlConfig: {
    job: {
      getEnum: {
        url: 'getEnum',
        mockUrl: '',
        method: 'GET',
      },
      getConstant: {
        url: 'getConstant',
        mockUrl: '',
        method: 'GET',
      },
    },
    getScheduleList: {
      // 校园行程列表
      url: 'getScheduleList',
      mockUrl: '',
      method: 'GET',
    },
    getSchedule: {
      url: 'getSchedule',
      mockUrl: '',
      method: 'GET',
    },
    getUserCollectionJob: {
      url: 'getUserCollectionJob',
      mockUrl: '',
      method: 'GET',
    },
    getUserDeliveryJob: {
      url: 'getUserDeliveryJob',
      mockUrl: '',
      method: 'GET',
    },
    getNewsList: {
      url: 'getNewsList',
      mockUrl: '',
      method: 'GET',
    },
    postUserSchedule: {
      url: 'postUserSchedule',
      mockUrl: '',
      method: 'POST',
    },
    postCollection: {
      url: 'postCollection',
      mockUrl: '',
      method: 'POST',
    },
    getJobList: {
      url: 'getJobList',
      mockUrl: '',
      method: 'GET',
    },
  },
};
