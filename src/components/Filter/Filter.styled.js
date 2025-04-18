import styled from "styled-components";

export const FilterContainer = styled.div`
margin-top: 64px;
height: 78px;
`
export const FilterTitle = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 129%;
color: #8a8a89;
margin-bottom: 8px;
`
export const SFilterSelect = styled.button`
position: relative;
border-radius: 14px;
border: none;
padding: 16px 162px 16px 18px;
background: #54be96;
transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

font-weight: 500;
font-size: 16px;
line-height: 125%;
color: #fbfbfb;

&:hover{
    background: #36a379;
}
`

export const FilterIcon = styled.div`
position: absolute;
top: 22px;
right: 14px;
`
export const FilterUl = styled.ul`
visibility: hidden
`



