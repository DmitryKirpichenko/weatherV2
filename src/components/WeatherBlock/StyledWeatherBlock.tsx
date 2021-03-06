import styled from 'styled-components';

interface IWeatherBlock {
    number: number
}

export const StyledWeatherBlock = styled.div`
    grid-area: 1/${(props: IWeatherBlock) => props.number}/2/${(props: IWeatherBlock) => props.number + 1};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;
export const StyledWeatherBlockDay = styled.p`
    font-size: 20px;
`;
export const StyledWeatherBlockImgWrapper = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const StyledWeatherBlockImg = styled.img`
    width: 50%;
    margin: 0 auto;
`;
export const StyledWeatherBlockDayWrapper = styled.p`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 10%;
`;
export const StyledWeatherBlockTemperature = styled.p`
    grid-area: 3 / 1 / 4 / 2; 
    font-size: 28px;
    display: flex;
    justify-content: center;
`;
