import React, { useEffect, useState } from 'react';
import { cabinArray, cardInfo } from '../lib/types';

import Homecards from './Homecards';
import { apiCall } from '../lib/const';
import { getCabins } from '../lib/api';

function FeaturedCards({ cabinArray }: cabinArray) {
  const featuredSortedArray: any = [];

  let count = 0;

  for (let i = 0; i < cabinArray.length; i++) {
    const element: any = cabinArray[i];

    if (element.isFeatured) {
      featuredSortedArray.push(element);
      count++;
    }
    if (count === 2) {
      break;
    }
  }

  return (
    <>
      {featuredSortedArray.map((elm: cardInfo) => {
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
      })}
    </>
  );
}

export default FeaturedCards;
