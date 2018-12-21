export default {
  wexin() {
    const ua = window.navigator.userAgent.toLowerCase();
    const isWeixin = ua.includes('micromessenger');
    return isWeixin;
  },
};
