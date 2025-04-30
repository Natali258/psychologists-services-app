
import React from "react";
import { SBackdropModal, SModal, SModalBoxPhoneNum, SModalBtn, SModalBtnClose, SModalContainerForm, SModalContainerInfo, SModalContainerPsName, SModalFormInput, SModalFormInputComment, SModalFormInputPhone, SModalInfo, SModalPsName, SModalText, SModalTitle } from "./MakeAppointment.styled";
import { IconSvg } from "../Icon/IconSvg";
import { Icon } from "../Icon/Icon";

export const MakeAppointment = ({open, onClose}) => {
  return (
    <SBackdropModal>
        <SModal open={open} onClose={onClose}>
            <SModalBtnClose><Icon name ='icon-x' size={20} /></SModalBtnClose>
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
                    <div>Avatar</div>
                    <SModalContainerPsName>
                        <SModalInfo>Your psychologists</SModalInfo>
                        <SModalPsName>Name</SModalPsName>
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
        </SModal>
    </SBackdropModal>
  );
};
