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
  handleScheduleState({ constant }) {
    return constant ? constant.ScheduleState || {} : {};
  },
  handleReviewType({ constant }) {
    return constant ? constant.ReviewType || {} : {};
  },
  handleNewsType({ constant }) {
    return constant ? constant.NewsType || {} : {};
  },
};
