import styled from "styled-components";
import searchButton from '../../image/button/search/svg/searchButton.svg'

export const StyledInput = styled.input`
    display: block;
   width: 80%;
   height: 50%;
   padding: 0 20px;
   margin-bottom: 10px;
   margin-top: 10px;
   background: #E9EFF6;
   opacity: 0.5;
   line-height: 40px;
   border-width: 0;
   border-radius: 20px;
   font-family: 'Roboto', sans-serif;
   align-items: center;
   grid-area: 1 / 3 / 2 / 5;
`
export const StyledCityButton = styled.button`
    margin-top: 14px;
    background-image: url(${() => searchButton});
    background-repeat: no-repeat;
    width: 2%;
    height: 6.5%;
    border: none;
    position: absolute;
    margin-left: 48%;
    background-color: transparent;
    @media(max-width: 768px){
        margin-top: 6%;
        margin-left: 65%;
    }
`
export const StyledInputWrapper = styled.div`
    
`