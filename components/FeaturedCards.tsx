import React, { useEffect, useState } from 'react';

import Homecards from './Homecards';
import { apiCall } from '../lib/const';
import { cabinArray } from '../lib/types';
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
      {featuredSortedArray.map(
        ({
          title,
          id,
          description,
          extra_description,
          price,
          adress,
          heroImg,
          map,
          imgArray,
          county,
          people_rooms,
          dates,
          short_description,
          isFire,
          isElectricity,
          isPool,
          isToilet,
          isHiking,
          isSlalom,
          isSkiing,
          isWinterActivities,
          isWateractives,
          isPets,
          rooms,
          beds,
        }: any): any => {
          return (
            <Homecards
              key={id}
              title={title}
              heroImg={heroImg}
              id={id}
              price={price}
              description={description}
              extra_description={extra_description}
              short_description={short_description}
              adress={adress}
              map={map}
              imgArray={imgArray}
              county={county}
              people_rooms={people_rooms}
              isFire={isFire}
              isElectricity={isElectricity}
              isPool={isPool}
              isToilet={isToilet}
              isHiking={isHiking}
              isSlalom={isSlalom}
              isSkiing={isSkiing}
              isWinterActivities={isWinterActivities}
              isWateractives={isWateractives}
              isPets={isPets}
              rooms={rooms}
              beds={beds}
            />
          );
        }
      )}
    </>
  );
}

export default FeaturedCards;
