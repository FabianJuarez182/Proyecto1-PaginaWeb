/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
  ],
}
