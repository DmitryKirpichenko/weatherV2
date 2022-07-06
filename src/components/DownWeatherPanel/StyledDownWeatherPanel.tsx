import styled from "styled-components";

export const StyledDownWeatherPanel = styled.div`
    width: 100%;
    background-color: #09344d;
    opacity: 0.9;
    grid-area: 6 / 1 / 8 / 7; 

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`