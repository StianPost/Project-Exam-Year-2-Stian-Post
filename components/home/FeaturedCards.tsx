import React, { useEffect, useState } from 'react';

import { BaseURL } from '../../lib/const';
import Homecards from './Homecards';
import axios from 'axios';
import { cabinInterface } from '../../lib/types';

function FeaturedCards() {
  const [cabins, setCabins] = useState<cabinInterface[] | []>([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(BaseURL + '/cabins/');
      setCabins(data);
    })();
  }, []);

  if (cabins.length === 0)
    return (
      <div className='flex flex-col items-center w-full justify-center'>
        <p className=''>Loading Cards...</p>
        <div className='loadingBG w-52 h-52'></div>
      </div>
    );

  const featuredSortedArray: cabinInterface[] = [];

  let count: number = 0;

  for (let i: number = 0; i < cabins.length; i++) {
    const element: cabinInterface = cabins[i];

    if (element.isFeatured) {
      featuredSortedArray.push(element);
      count++;
    }
    if (count === 4) {
      break;
    }
  }

  const shuffledArray = featuredSortedArray.sort((a, b) => 0.5 - Math.random());

  return (
    <>
      {shuffledArray.map(
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
        }: cabinInterface): any => {
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
