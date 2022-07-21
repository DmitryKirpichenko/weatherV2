import styled from 'styled-components';

interface IStyledMain{
    img: string
}

export const StyledMain = styled.div`
    background-image: url(${(props: IStyledMain) => props.img});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;
