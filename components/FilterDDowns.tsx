import React, { useState } from 'react';

import Select from 'react-select';

function FilterDDowns({ selectOptions, filterType, isMulti }: any) {
  const [selectedOption, setSelectedOption]: any = useState(null);

  return (
    <div>
      <label htmlFor={filterType}>{filterType}</label>
      <Select
        id={filterType}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={selectOptions}
        isMulti={isMulti}
        blurInputOnSelect
      />
    </div>
  );
}

export default FilterDDowns;
