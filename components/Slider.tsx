import { ImgObj, ImgProp } from '../lib/types';
import React, { useRef, useState } from 'react';

import Image from 'next/image';

function Slider({
  imgArray,
  heroImg,
}: {
  imgArray: string[];
  heroImg: string;
}) {
  const [image, setImage] = useState('');

  const myLoader = () => {
    return heroImg;
  };

  function imgSelect(url: string) {
    setImage(url);
    console.log('url', url);
    console.log('setimg', image);
  }

  return (
    <div className=''>
      <div className='Main'>
        <Image
          loader={myLoader}
          src={image ? image : heroImg}
          alt={`Image of cabin`}
          width={1250}
          height={800}
        />
      </div>
      <div className='Thumb'>
        <ul className='flex'>
          <li>
            <Image
              loader={myLoader}
              src={heroImg}
              alt={`Image of cabin`}
              width={125}
              height={80}
              onClick={() => {
                imgSelect(heroImg);
              }}
            />
          </li>
          {imgArray.map((elm: any) => {
            const secondaryLoader = () => {
              return elm.imgUrl;
            };
            return (
              <li key={elm.id}>
                <Image
                  loader={secondaryLoader}
                  src={elm.imgUrl}
                  alt={`Image of cabin`}
                  width={125}
                  height={80}
                  onClick={() => {
                    imgSelect(elm.imgUrl);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Slider;

// {imgArray.map((elm: ImgObj) => {
//   const secondaryLoader = () => {
//     return elm.imgUrl;
//   };
//   return (
//     <div key={elm.id} className='image'>
//       <Image
//         loader={secondaryLoader}
//         src={elm.imgUrl}
//         alt={`Image of cabin`}
//         width={125}
//         height={80}
//       />
//     </div>
//   );
// })}
