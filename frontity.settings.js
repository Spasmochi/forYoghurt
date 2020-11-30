const settings = {
  name: "foryoghurt",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Company", "/"],
            ["Customers and Partners", "/"],
            ["Product", "/"],
            ["Industry Solutions", "/"],
            ["Resources and Support", "/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          "api":
            "https://public-api.wordpress.com/wp/v2/sites/testingeverything752826403.wordpress.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
