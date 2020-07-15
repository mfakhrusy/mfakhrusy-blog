module.exports = {
  siteMetadata: {
    title: `mfakhrusy blog`,
    name: `mfakhrusy`,
    siteUrl: `https://fakhrusy.com`,
    description: `Blog by me, mfakhrusy, on whatever the heck I want`,
    hero: {
      heading: `I write about code, science, space, and math.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/f_fakhrusy`,
      },
      {
        name: `github`,
        url: `https://github.com/mfakhrusy`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/v8areu`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mfakhrusy/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
