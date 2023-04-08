module.exports = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/collections",
        permanent: false,
      },
    ];
  },
};
// "@babel/runtime": "^7.13.17",
// "@material-ui/core": "^4.12.1",
// "@material-ui/icons": "^4.11.2",
// "@material-ui/lab": "^4.0.0-alpha.60",
// "@material-ui/styles": "^4.11.4",
// "@types/shopify-buy": "^2.10.5",
// "graphql": "^15.5.0",
// "graphql-request": "^3.4.0",
// "lodash": "^4.17.21",
// "next": "^13.2.4",
// "react": "^18.2.0",
// "react-dom": "^18.2.0",
// "react-infinite-scroll-component": "^6.1.0",
// "sanitize-html": "^2.4.0",
// "shopify-buy": "^2.11.0",
// "swiper": "^6.5.9"

// "devDependencies": {
//   "@types/lodash": "^4.14.171",
//   "@types/node": "^14.14.41",
//   "@types/react": "^17.0.3",
//   "@types/sanitize-html": "^2.3.2",
//   "autoprefixer": "^10.2.5",
//   "eslint": "^7.32.0",
//   "eslint-config-next": "^11.0.1",
//   "postcss": "^8.2.13",
//   "tailwindcss": "^2.1.2",
//   "typescript": "~4.3.2"
// }
