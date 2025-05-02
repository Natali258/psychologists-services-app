
import React from "react";
import { SBackdropModal, SModal, SModalAvatar, SModalBox, SModalBoxPhoneNum, SModalBtn, SModalBtnClose, SModalContainerForm, SModalContainerInfo, SModalContainerPsName, SModalFormInput, SModalFormInputComment, SModalFormInputPhone, SModalInfo, SModalPsName, SModalScrol, SModalText, SModalTitle } from "./MakeAppointment.styled";
import { IconSvg } from "../Icon/IconSvg";
import { Icon } from "../Icon/Icon";

export const MakeAppointment = ({open, onClose, psychologist}) => {
  console.log(psychologist);
  
  return (
    <SBackdropModal>
        
        <SModal open={open} onClose={onClose}>
            <SModalScrol>
              <SModalBtnClose><Icon name ='icon-x' size={32} /></SModalBtnClose>
              <SModalBox>
              <div>
                      <SModalTitle>Make an appointment with a psychologists</SModalTitle>
                      <SModalText>
                      You are on the verge of changing your life for the better. Fill out
                      the short form below to book your personal appointment with a
                      professional psychologist. We guarantee confidentiality and respect
                      for your privacy.
                      </SModalText>
              </div>
              <SModalContainerInfo>
                      <SModalAvatar src={psychologist.avatar_url} alt="people" />
                      <SModalContainerPsName>
                          <SModalInfo>Your psychologists</SModalInfo>
                          <SModalPsName>{psychologist.name}</SModalPsName>
                      </SModalContainerPsName>
              </SModalContainerInfo>
              <SModalContainerForm action="">
                      <SModalFormInput type="text" placeholder="Name"/>
                      <SModalBoxPhoneNum>
                          <SModalFormInputPhone type="tel" placeholder="+380"/>
                          <SModalFormInputPhone type="time" placeholder="00:00"/>
                      </SModalBoxPhoneNum>
                      <SModalFormInput type="text" placeholder="Email"/>
                      <SModalFormInputComment type="text" placeholder="Comment"/>
              </SModalContainerForm>
              <SModalBtn>Send</SModalBtn>
              </SModalBox>
            </SModalScrol>
        </SModal>
    </SBackdropModal>
  );
};
