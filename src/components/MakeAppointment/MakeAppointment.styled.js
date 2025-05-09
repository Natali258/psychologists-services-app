import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

export const SBackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1;
`;
export const SModal = styled.div`
  display: block;
  max-height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  /* padding: 64px; */
  border-radius: 30px;
  width: 599px;
  height: 859px;
  background: #fbfbfb;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
export const SModalScrol = styled.div`
  overflow-y: auto;
  padding: 1rem;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(84, 190, 150, 0.2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(84, 190, 150, 1);
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(84, 190, 150, 1);
  }
`;
export const SModalBtnClose = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: #fbfbfb;
`;
export const SModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #191a15;
`;
export const SModalText = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
`;
export const SModalContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin: 40px 0 40px 0;
`;
export const SModalAvatar = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`;
export const SModalContainerPsName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const SModalInfo = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
`;
export const SModalPsName = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #191a15;
`;
export const SModalContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;
export const SModalFormInput = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 100px 16px 18px;
  /* width: 472px; */
  height: 52px;
  outline: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #191a15;

  &:hover,
  &:focus {
    border: 1px solid #36a379;
  }
`;
export const SModalFormInputComment = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px 80px 18px;
  /* width: 472px; */
  height: 116px;
  outline: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #191a15;

  &:hover,
  &:focus {
    border: 1px solid #36a379;
  }
`;
export const SModalBoxPhoneNum = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const SModalFormInputPhone = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px 16px 18px;
  flex: 1;
  outline: none;
  /* width: 232px;
height: 52px; */

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #191a15;

  &:hover,
  &:focus {
    border: 1px solid #36a379;
  }
`;
export const SModalFormInputTime = styled.div`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  /* padding: 16px 18px 16px 18px; */
  flex: 1;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #191a15;

  &:hover,
  &:focus {
    border: 1px solid #36a379;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 16px 18px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    font-size: 16px;
    outline: none;
  }

  .react-datepicker {
    border-radius: 12px;
    font-size: 16px;
    border: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__time-list {
    overflow: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .react-datepicker__time-list-item {
    border-radius: 8px;
    /* padding: 8px 32px; */
    transition: 0.2s;
  }

  .react-datepicker__time-list-item:hover {
    background-color: #f0f0f0;
  }

  .react-datepicker__time-list-item--selected {
    background-color: #4caf50;
    color: white;
  }
  .react-datepicker__time-container {
    display: block;
    margin: 16px;
    width: unset;
  }

  .react-datepicker__header {
    all: unset;
  }
  .react-datepicker__header {
    border-top-right-radius: 0.3rem;
    width: max-content;
  }
  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 16px;
    line-height: 150%;
    color: #191a15;
    /* overflow: hidden; */
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #36a379;
    color: white;
    font-weight: bold;
  }
`;
export const SModalBtn = styled.button`
  border-radius: 30px;
  padding: 16px 198px;
  background: #54be96;
  border: none;
  transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  /* width: 472px;
height: 52px; */

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;

  &:hover {
    background: #36a379;
  }
`;

export const SModalBox = styled.div`
  padding: 64px;
`;
