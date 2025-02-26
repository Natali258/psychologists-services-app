
import styled from 'styled-components'

export const BoxLogin = styled.div`
    display: block;
    padding: 64px;
    position: 'absolute';
    top: '50%';
    left: '50%';
    transform: 'translate(-50%, -50%)';
    width: 566px;
    height: 510px;
    background-color: #fbfbfb;
    border: '2px solid #000';
    box-shadow: 24;
    border-radius: 30px;
`

export const STittleLogIn = styled.span`
    display: block;
    margin-bottom: 20px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #191a15;
`

export const STextLogIn = styled.span`
    display: block;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 17.5px;
    line-height: 125%;
    color: rgba(25, 26, 21, 0.5);
`

export const SFormLogIn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 40px;
`

// export const SFieldEmailLogIn = styled.input`
//     border: 1px solid rgba(25, 26, 21, 0.1);
//     border-radius: 12px;
//     padding: 16px 379px 16px 18px;
//     width: 438px;
//     height: 52px;

//     /* font-family: var(--font-family);
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 125%;
//     color: #191a15; */
// `


export const SBtnLogIn = styled.button`
    padding: 5px 15px 5px 15px;
    width: 100%;
    margin-top: 9px;
    border-radius: 30px;
    border: none;
    /* padding: 16px 196px; */
    width: 438px;
    height: 52px;
    background: #54be96;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    color: #fbfbfb;
`