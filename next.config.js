const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  assetPrefix: 'https://github.com/anujrajak/Lo-Fi-Radio-Work-Study-Chill/blob/gh-pages/'
});
