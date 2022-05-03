import React, { useState } from 'react';

import Select from 'react-select';

function FilterDDowns({ selectOptions, filterType }: any) {
  const [selectedOption, setSelectedOption]: any = useState(null);
  //   const options: { value: string; label: string }[] = [
  //     { value: 'chocolate', label: 'Chocolate' },
  //     { value: 'strawberry', label: 'Strawberry' },
  //     { value: 'vanilla', label: 'Vanilla' },
  //   ];

  return (
    <div>
      <label htmlFor={filterType}>{filterType}</label>
      <Select
        id={filterType}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={selectOptions}
        isMulti
      />
    </div>
  );
}

export default FilterDDowns;
