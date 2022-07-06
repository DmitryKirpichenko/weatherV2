import React, { FC } from "react";
import { StyledCountry, StyledMain, StyledTown } from "./StyledCountry";

export const Country: FC<{town: string, country: string}> = ({town, country}) => {
    return(
        <StyledMain>
            <StyledTown>{town}</StyledTown>
            <StyledCountry>{country}</StyledCountry>
        </StyledMain>
    )
}