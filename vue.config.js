module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/recruit-wx/'
    : '/',
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            './src/assets/styles/index.scss',
          ],
        })
        .end();
    });
  },
};
