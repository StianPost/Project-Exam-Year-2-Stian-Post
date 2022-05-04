import React, { useEffect, useState } from 'react';

import Homecards from './Homecards';
import { apiCall } from '../lib/const';
import { cardInfo } from '../lib/types';
import { getCabins } from '../lib/api';

function FeaturedCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const feauturedArray = await getCabins(apiCall);

      const shuffledFeatured = feauturedArray.sort(
        (a: number, b: number) => 0.5 - Math.random()
      );

      setData(shuffledFeatured);
    })();
  }, []);

  const featuredSortedArray: any = [];

  if (data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      const element: any = data[i];
      if (element.isFeatured) {
        featuredSortedArray.push(element);
        count++;
      }
      if (count === 2) {
        break;
      }
    }
  }

  return (
    <>
      {data
        ? featuredSortedArray.map((elm: cardInfo) => {
            return (
              <Homecards
                key={elm.id}
                title={elm.title}
                heroImg={elm.heroImg}
                short_description={elm.short_description}
                price={elm.price}
                id={elm.id}
              />
            );
          })
        : 'Loading...'}
    </>
  );
}

export default FeaturedCards;
