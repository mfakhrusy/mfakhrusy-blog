const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
[optimizedImages, {}]
],{
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },}
  )

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/blog",
//         permanent: true,
//       },
//     ];
//   },
// };
