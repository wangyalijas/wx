export default {
  handleJobType({ constant }) {
    return constant ? constant.JobType || {} : {};
  },
  handleWorkPlace({ constant }) {
    return constant ? constant.WorkPlace || [] : [];
  },
  handleRecruitType({ constant }) {
    return constant ? constant.RecruitType || {} : {};
  },
};
