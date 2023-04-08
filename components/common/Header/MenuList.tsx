import { ArrowForward } from "@material-ui/icons";
import { log } from "console";
import client from "lib/client";
import { getCollectionName } from "lib/graphql/collection/getCollectionNames";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  visibility: string;
};

const MenuList: React.FC<Props> = ({ visibility }) => {
  const [collectionNames, setCollectionNames] = useState<string[]>([]);

  useEffect(() => {
    getCollectionName()
      .then((cNames) => {
        setCollectionNames(cNames);
      })
      .catch((err) => {
        console.error(err);

        setCollectionNames([]);
      });
  }, []);

  return (
    <nav className={`md:text-center ${visibility}`}>
      <ul>
        {collectionNames.length > 0 &&
          collectionNames?.map((title, idx) => (
            <li
              className="border-t md:border-t-0 border-gray-20 md:inline-block"
              key={idx}
            >
              <a
                href={`/collections/${title}`}
                className="block mx-auto px-8 md:px-4 py-4 text-gray-700 hover:text-opacity-70 hover:underline"
                style={{ maxWidth: "640px" }}
              >
                {title[0].toUpperCase() + title.slice(1)}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MenuList;
