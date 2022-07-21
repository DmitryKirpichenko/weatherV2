import React, { FC } from 'react';

import { StyledCountry, StyledMain, StyledTown } from './StyledCountry';

interface ICountry{
    town: string,
    country: string
}

export const Country: FC<ICountry> = ({ town, country }) => (
        <StyledMain>
            <StyledTown>{town}</StyledTown>
            <StyledCountry>{country}</StyledCountry>
        </StyledMain>
);
