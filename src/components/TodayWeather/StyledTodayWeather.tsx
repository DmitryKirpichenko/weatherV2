import styled from 'styled-components';

export const StyledTodayWeather = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;
export const StyledIcon = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StyledImg = styled.img`
    width: 80%;
    margin: 0 auto;

`;
export const StyledTextWrapper = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    text-align: left;
    display: flex;
    align-items: flex-end;
    
`;
export const StyledText = styled.p`
    font-size: 15px;
`;

export const StyledTemperature = styled.p`
    grid-area: 2 / 2 / 3 / 3;
    text-align: left;
    font-size: 46px;
`;
