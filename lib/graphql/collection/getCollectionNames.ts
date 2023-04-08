import client from "lib/client";
import { Collection } from "shopify-buy";

export const getCollectionName = async () => {
  try {
    const collections: Collection[] = await client.collection.fetchAll();
    const collectionNames = collections.map((c) => c.title);
    return collectionNames;
  } catch (error) {
    return error;
  }
};
