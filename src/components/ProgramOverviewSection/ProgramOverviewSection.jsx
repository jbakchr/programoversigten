import React from "react";

import { TimeSlot } from "./TimeSlot";
import { ProgramTitle } from "./ProgramTitle";

export const ProgramOverviewSection = ({ section, setTimeSlot }) => {
  const { id, timeSlot, title } = section;

  return (
    <>
      <TimeSlot id={id} timeSlot={timeSlot} setTimeSlot={setTimeSlot} />
      <ProgramTitle title={title} />
    </>
  );
};
