import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value} Nok`;
}

export default function MinimumDistanceSlider() {
  const [value, setValue] = React.useState<number[]>([0, 500]);
  const minDistance: number = 10;

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <>
      <Box>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={value}
          onChange={handleChange1}
          valueLabelDisplay='auto'
          getAriaValueText={valuetext}
          disableSwap
          min={0}
          max={500}
        />
      </Box>
      <div className='flex justify-between'>
        {value.map((elm) => {
          return <p key={elm}>{elm} Nok</p>;
        })}
      </div>
    </>
  );
}
