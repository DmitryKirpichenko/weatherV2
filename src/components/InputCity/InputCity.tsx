import React, { FC, useState } from 'react';
import AsyncSelect from 'react-select/async';

import { StyledInputWrapper } from './StyledInputCity';

import { useActions } from '../../hooks/useActions';
import { getCitysByNameApi } from '../../utils';

interface ISelect {
    value: string,
    label: string
}

interface IInputCity {
    city: string
}

export const InputCity: FC<IInputCity> = ({ city }) => {
  const { fetchWeather } = useActions();

  const [selectCity, setViewSity] = useState({ value: city, label: city });

  const promiseOptions = (inputValue: string) => new Promise<ISelect[]>((resolve) => {
    resolve(getCitysByNameApi(inputValue).then((answer) => answer.map((item) => ({
      value: `${item.name}, ${item.country}`,
      label: `${item.name}, ${item.country}`,
    }))));
  });
  const searchWeather = (newValue: ISelect | null) => {
    if (newValue) fetchWeather(newValue.value);
  };

  const handeleInputChange = (newValue: string) => {
    setViewSity({ value: newValue, label: newValue });
    return newValue;
  };

  return (
        <StyledInputWrapper>
            <AsyncSelect
                noOptionsMessage={() => null}
                value={selectCity}
                onChange={searchWeather}
                cacheOptions
                defaultOptions
                onInputChange={handeleInputChange}
                loadOptions={promiseOptions}
            />
        </StyledInputWrapper>
  );
};
