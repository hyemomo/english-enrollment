"use client";
import toast, { Toaster } from "react-hot-toast";
import { useState, useMemo } from "react";
import FormCard from "@/app/enrollment/components/FormCard";
import ActionButtons from "@/app/enrollment/components/ActionButtons";
import { getDateRange } from "@/app/enrollment/utils/DateUtils";
import EnrollmentHeader from "@/app/enrollment/components/EnrollmentHeader";

export default function EnrollmentPage() {
  const [course, setCourse] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [dayOption, setDayOption] = useState<string>("");

  const { min, max } = useMemo(() => getDateRange(), []);

  function handleSubmit() {
    if (!course || !dayOption || !startDate || !selectedTime) {
      toast.error("모든 항목을 선택해주세요.");
      return;
    }
  }

  function handleReset() {
    setCourse("");
    setDayOption("");
    setStartDate(undefined);
    setSelectedTime("");
  }
  
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0fbff 0%, #ffffff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif",
        padding: "40px 16px",
      }}
    >
      <Toaster />
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <EnrollmentHeader />
        <FormCard
          course={course}
          setCourse={setCourse}
          dayOption={dayOption}
          setDayOption={setDayOption}
          startDate={startDate}
          setStartDate={setStartDate}
          min={min}
          max={max}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        <ActionButtons handleSubmit={handleSubmit} handleReset={handleReset} />
      </div>
    </div>
  );
}
