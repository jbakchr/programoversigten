import React from "react";

import { TimeSlot } from "./TimeSlot";
import { ProgramTitle } from "./ProgramTitle";

export const ProgramOverviewSection = ({
  section,
  setTimeSlot,
  setTitle,
  addNewSection,
}) => {
  const { id, timeSlot, title } = section;

  return (
    <>
      <TimeSlot id={id} timeSlot={timeSlot} setTimeSlot={setTimeSlot} />
      <ProgramTitle
        id={id}
        title={title}
        setTitle={setTitle}
        addNewSection={addNewSection}
      />
    </>
  );
};
