import { CircularProgress, Grid } from "@material-ui/core";
import { getCollectionName } from "lib/graphql/collection/getCollectionNames";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CollectLoader = () => {
  const router = useRouter();
  const [collection, setCollection] = useState<string | undefined>(undefined);
  useEffect(() => {
    getCollectionName().then((names) => setCollection(names[0]));
  }, []);

  useEffect(() => {
    if (collection) {
      const current = router.pathname;
      router.push(`/${current}/${collection}`);
    }
  }, [collection, router]);

  if (collection)
    return (
      <div className="flex h-screen w-full justify-center items-center ">
        Welcome to the ecommerse world
      </div>
    );
  else
    return (
      <Grid
        style={{
          justifyContent: "center",
          display: "flex",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <CircularProgress size={40} color="primary" />
      </Grid>
    );
};

export default CollectLoader;
