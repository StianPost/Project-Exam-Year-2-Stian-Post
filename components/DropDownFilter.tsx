import React, { useState } from 'react';

import Select from 'react-select';

function DropDownFilter({
  selectOptions,
  filterType,
  isMulti,
  handleOnChange,
  placeholderText,
}: any) {
  const [selectedOption, setSelectedOption]: any = useState(null);

  let newFilterType = '';

  if (filterType) {
    newFilterType = filterType;
  }

  function onChange(val: any) {
    setSelectedOption(val);
    handleOnChange(val);
  }

  return (
    <>
      {filterType ? <p>{filterType}</p> : ''}
      <Select
        defaultValue={selectedOption}
        onChange={onChange}
        options={selectOptions}
        isMulti={isMulti}
        blurInputOnSelect
        value={selectedOption}
        placeholder={placeholderText}
      />
    </>
  );
}

export default DropDownFilter;
