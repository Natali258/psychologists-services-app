
import React from "react";
import { SBackdropModal, SModal } from "./MakeAppointment.styled";

export const MakeAppointment = ({open, onClose}) => {
  return (
    <SBackdropModal>
        <SModal open={open} onClose={onClose}>
            <button>Close</button>
            <div>
                    <h2>Make an appointment with a psychologists</h2>
                    <p>
                    You are on the verge of changing your life for the better. Fill out
                    the short form below to book your personal appointment with a
                    professional psychologist. We guarantee confidentiality and respect
                    for your privacy.
                    </p>
            </div>
            <div>
                    <div>Avatar</div>
                    <div>
                        <span>Your psychologists</span>
                        <span>Dr. Sarah Davis</span>
                    </div>
            </div>
            <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
            </form>
            <button>Send</button>
        </SModal>
    </SBackdropModal>
  );
};
