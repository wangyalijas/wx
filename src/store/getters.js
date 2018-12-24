/* eslint-disable */
function objectToArray(payload) {
  return Object.keys(payload).sort().map(index => payload[index])
}
function addAllDataToConstantTop(constantData, allData = [{id: '', name: '全部', description: '全部'}]) {
  return allData.concat(constantData)
}
export default {
  handleJobType({ constant }) {
    return constant ? addAllDataToConstantTop(objectToArray(constant.JobType)) || [] : [];
  },
  handleWorkPlace({ constant }) {
    return constant ? constant.WorkPlace|| [] : [];
  },
  handleRecruitType({ constant }) {
    return constant ? addAllDataToConstantTop(objectToArray(constant.RecruitType)) || [] : [];
  },
  handleGender({ constant }) {
    return constant ? objectToArray(constant.Gender) || [] : [];
  },
  handleScheduleState({ constant }) {
    return constant ? addAllDataToConstantTop(objectToArray(constant.ScheduleState)) || [] : [];
  },
  handleReviewType({ constant }) {
    return constant ? addAllDataToConstantTop(objectToArray(constant.ReviewType)) || [] : [];
  },
  handleNewsType({ constant }) {
    return constant ? addAllDataToConstantTop(objectToArray(constant.NewsType)) || [] : [];
  },
  handleEducationType({ constant }) {
    return constant ? objectToArray(constant.Education) || [] : [];
  },
  handleIsSchool(state) {
    return state.isSchool;
  },
};
