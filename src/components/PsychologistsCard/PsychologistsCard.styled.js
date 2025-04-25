import styled from "styled-components";

export const CardContainer = styled.div`
width: 100%;
height:100%;
padding: 24px;
border-radius: 24px;
background: #fbfbfb;
`

export const CardUl = styled.ul`
display: flex;
flex-direction: row;
gap: 24px
`

export const ImgContainer = styled.li`
width: 120px;
height:120px;
border-radius: 30px;
background: #fbfbfb;
border: 2px solid rgba(84, 190, 150, 0.2);
padding: 12px
`
export const ImgStyle = styled.img`
width: 93px;
height:93px;
border-radius: 15px;
`
export const SContainerTitle = styled.div`
display: flex;
flex-direction: row;
`

export const SLiStar = styled.li`
display: flex;
flex-direction: row;
gap: 5px;
`

export const SSpanRating = styled.span`
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #191a15;
`

export const SSpan = styled.span`
display: inline-block;
margin-right: auto;

font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #8a8a89;
`

export const SContainerPrice = styled.ul`
display: flex;
flex-direction: row;
gap: 16px
`
export const SLiStroke = styled.li`
display: block;
width: 2px;
height: 16px;
background-color: rgba(25, 26, 21, 0.2);
margin: auto 0;
`
export const SLiPrice = styled.li`
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #191a15;
`
export const SSpanPrice = styled.span`
color: #38cd3e;
`
export const SBtnHeart = styled.button`
margin-left: 28px;
`
export const SPsName = styled.h2`
display: block;
margin-top: 8px;

font-weight: 500;
font-size: 24px;
line-height: 100%;
color: #191a15;
`
export const SListInfo = styled.ul`
display: flex;
width: 810px;
margin-top: 24px;
flex-direction: row;
flex-wrap: wrap;
gap: 4px;
`
export const SListInfoLi = styled.li`
border-radius: 24px;
padding: 8px 16px;
background: #f3f3f3;

font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #8a8a89;
`
export const SListInfoLiSpan = styled.span`
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #191a15;
`
export const STextAbout = styled.p`
display: block;
margin: 24px 0 14px 0;
font-weight: 400;
font-size: 17px;
line-height: 125%;
color: rgba(25, 26, 21, 0.5);
`
export const SBtnRead = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 150%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #191a15;
border: none;
background: #fbfbfb;
`