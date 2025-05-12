import React from "react";
import {
  GlobalDatePickerStyles,
  SBackdropModal,
  SDatePickerTime,
  SModal,
  SModalAvatar,
  SModalBox,
  SModalBoxPhoneNum,
  SModalBtn,
  SModalBtnClose,
  SModalContainerForm,
  SModalContainerInfo,
  SModalContainerPsName,
  SModalFormInput,
  SModalFormInputComment,
  SModalFormInputPhone,
  SModalInfo,
  SModalPsName,
  SModalScrol,
  SModalText,
  SModalTitle,
} from "./MakeAppointment.styled";
import { Icon } from "../Icon/Icon";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

export const MakeAppointment = ({ open, onClose, psychologist }) => {

  const { control, register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <SBackdropModal>
      <SModal open={open} onClose={onClose}>
        <SModalScrol>
          <SModalBtnClose>
            <Icon name="icon-x" size={32} />
          </SModalBtnClose>
          <SModalBox>
            <div>
              <SModalTitle>
                Make an appointment with a psychologists
              </SModalTitle>
              <SModalText>
                You are on the verge of changing your life for the better. Fill
                out the short form below to book your personal appointment with
                a professional psychologist. We guarantee confidentiality and
                respect for your privacy.
              </SModalText>
            </div>
            <SModalContainerInfo>
              <SModalAvatar src={psychologist.avatar_url} alt="people" />
              <SModalContainerPsName>
                <SModalInfo>Your psychologists</SModalInfo>
                <SModalPsName>{psychologist.name}</SModalPsName>
              </SModalContainerPsName>
            </SModalContainerInfo>
            <GlobalDatePickerStyles/>
            <SModalContainerForm action="" onSubmit={handleSubmit(submit)}>
              <SModalFormInput
                {...register("name")}
                type="text"
                placeholder="Name"
              />
              <SModalBoxPhoneNum>
                <SModalFormInputPhone
                  {...register("number")}
                  type="tel"
                  placeholder="+380"
                />
                <Controller
                  name="time"
                  control={control}
              
                  render={({ field }) => (
                    <SDatePickerTime
                      {...field}
                      value={field.value}
                      selected={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Meeting time"
                      dateFormat="HH:mm"
                      timeFormat="HH:mm"
                      placeholderText="00:00"
                    />
                  )}
                />
                {/* <SModalFormInputTime type='time' ><DatePicker
                            selected={time}
                            onChange={(time) => setTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Meeting time"
                            dateFormat="HH:mm"
                            placeholderText="00:00"
                          /></SModalFormInputTime> */}
              </SModalBoxPhoneNum>
              <SModalFormInput
                {...register("email")}
                type="text"
                placeholder="Email"
              />
              <SModalFormInputComment
                {...register("comment")}
                type="text"
                placeholder="Comment"
              />
              <SModalBtn>Send</SModalBtn>
            </SModalContainerForm>
          </SModalBox>
        </SModalScrol>
      </SModal>
    </SBackdropModal>
  );
};
