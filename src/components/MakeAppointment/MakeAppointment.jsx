
import React, { useState } from "react";
import { SBackdropModal, SModal, SModalAvatar, SModalBox, SModalBoxPhoneNum, SModalBtn, SModalBtnClose, SModalContainerForm, SModalContainerInfo, SModalContainerPsName, SModalFormInput, SModalFormInputComment, SModalFormInputPhone, SModalFormInputTime, SModalInfo, SModalPsName, SModalScrol, SModalText, SModalTitle } from "./MakeAppointment.styled";
import { IconSvg } from "../Icon/IconSvg";
import { Icon } from "../Icon/Icon";
import DatePicker from 'react-datepicker';

export const MakeAppointment = ({open, onClose, psychologist}) => {
  const [time, setTime] = useState(null);
  
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
                          <SModalFormInputTime><DatePicker
                            selected={time}
                            onChange={(time) => setTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Meeting time"
                            dateFormat="HH:mm"
                            placeholderText="00:00"
                          /></SModalFormInputTime>
                          {/* <SModalFormInputPhone type="time" placeholder="00:00"/> */}
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
