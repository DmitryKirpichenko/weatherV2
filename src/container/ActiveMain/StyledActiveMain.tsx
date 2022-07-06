import styled from "styled-components";

interface IStyledMain {
    img: string
}

export const StyledActiveMain = styled.div`
    width: 80%;
    height: 80%;
    background-image: url(${(props: IStyledMain) => props.img});
    background-size: cover;
    background-repeat: no-repeat;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    color: aliceblue;
`