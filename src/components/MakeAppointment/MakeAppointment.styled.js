import styled from "styled-components";

export const SBackdropModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    pointer-events: initial;
    visibility: visible;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: rgba(0, 0, 0, 0.5);
    
    align-items: center;
    justify-items: center;
    z-index: 1;
`
export const SModal = styled.div`
    display: block;
    padding: 64px;
    border-radius: 30px;
    width: 599px;
    /* height: 859px; */
    background: #fbfbfb;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(1)
`