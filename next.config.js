import withPlugins from "next-compose-plugins";
import optimizedImagesPlugin from "next-optimized-images";

module.exports = withPlugins([[optimizedImagesPlugin, {}]], {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
});
