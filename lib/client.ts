import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFYTOKEN,
  domain: process.env.NEXT_PUBLIC_DOMAIN,
});

export default client;
