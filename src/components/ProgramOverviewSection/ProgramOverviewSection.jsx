import React from "react";

import { TimeSlot } from "./TimeSlot";
import { ProgramTitle } from "./ProgramTitle";

export const ProgramOverviewSection = ({ section }) => {
  const { timeSlot, title } = section;

  return (
    <>
      <TimeSlot timeSlot={timeSlot} />
      <ProgramTitle title={title} />
    </>
  );
};
