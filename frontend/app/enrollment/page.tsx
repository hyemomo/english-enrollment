"use client";

import { useState, useMemo } from "react";
import { COURSES } from "@/app/enrollment/mocks/enrollments";
import { DAY_OPTIONS } from "@/app/enrollment/mocks/enrollments";
import FormCard from "@/app/enrollment/components/FormCard";
import ActionButtons from "@/app/enrollment/components/ActionButtons";
import { getDateRange } from '@/app/enrollment/utils/DateUtils';

export default function EnrollmentPage() {
  const [course, setCourse] = useState<string>("");
const [startDate, setStartDate] = useState<Date | undefined>(undefined);  
const [selectedTime, setSelectedTime] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string>("");
  const [dayOption, setDayOption] = useState<string>("");

  const { min, max } = useMemo(() => getDateRange(), []);

  function handleSubmit() {
    if (!course || !dayOption || !startDate || !selectedTime) {
      setError("모든 항목을 선택해주세요.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  function handleReset() {
    setCourse("");
    setDayOption("");
    setStartDate(undefined);
    setSelectedTime("");
    setSubmitted(false);
    setError("");
  }

  const courseLabel = COURSES.find((c) => c.id === course)?.label;
  const dayLabel = DAY_OPTIONS.find((d) => d.id === dayOption)?.label;

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
      <div style={{ width: "100%", maxWidth: "700px" }}>
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "28px",
                background: "linear-gradient(180deg, #00AAF0, #0095d4)",
                borderRadius: "2px",
              }}
            />

            <h1
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "#0f172a",
                margin: 0,
              }}
            >
              화상영어 수강신청
            </h1>
          </div>

          <p
            style={{
              color: "#0095d4",
              fontSize: "14px",
              fontWeight: 600,
              paddingLeft: "14px",
              margin: 0,
            }}
          >
            ※ 첫 수업은 레벨테스트로 진행됩니다.
          </p>
        </div>

        {/* Form Card */}
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

        {/* Buttons */}
        <ActionButtons handleSubmit={handleSubmit} handleReset={handleReset} />
      </div>
    </div>
  );
}