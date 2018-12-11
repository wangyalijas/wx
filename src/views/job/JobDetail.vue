<template>
  <div class="job-detail">
    <div class="job-detail__title">
      <div class="job-detail__title--area">上海</div>
      <div class="job-detail__title--job">MIGO4-实施工程师</div>
      <div class="job-detail__title--time">2018-03-15</div>
    </div>
    <ul class="jab-detail__category">
      <li class="job-detail__category--item"></li>
      <li class="job-detail__category--item"></li>
      <li class="job-detail__category--item"></li>
      <li class="job-detail__category--item"></li>
    </ul>
    <div class="jab-detail__content"></div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
};
</script>

<style lang="scss" scoped>
.job-detail {
  @include e(title) {
    padding: 0.80rem;
    position: relative;
    height: 1.31rem;
    background: #FFFFFF;
    @include m(area) {
      background: #E8F5FF;
      border: 0.03rem solid #BFE6FF;
      border-radius: 50%;
      font-size: 0.43rem;
      color: #6CC3FB;
      position: absolute;
      width: 1.04rem;
      height: 1.04rem;
      text-align: center;
      line-height: 1.04rem;
      top: 0.8rem;
      left: 0.8rem;
    }
    @include m(job) {
      height: 0.59rem;
      line-height: 0.59rem;
      font-size: 16px;
      color: #333333;
      position: absolute;
      left: 2.37rem;
      top: 0.8rem;
      font-weight: bold;
    }
    @include m(time) {
      font-size: 0.35rem;
      color: #999999;
    }
  }
}
</style>
