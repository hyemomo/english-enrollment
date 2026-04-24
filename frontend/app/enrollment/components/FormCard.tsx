import FormRow from "@/app/enrollment/components/FormRow";
import {
  COURSES,
  DAY_OPTIONS,
  mockTimeSlots,
} from "@/app/enrollment/mocks/enrollments";
import { formatDate } from '@/app/enrollment/utils/DateUtils';
import { Calendar } from "@/components/ui/calendar";

type FormCardProps = {
  course: string;
  setCourse: (course: string) => void;

  dayOption: string;
  setDayOption: (value: string) => void;

  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;

  min: Date;
  max: Date;

  selectedTime: string;
  setSelectedTime: (time: string) => void;
};
export default function FormCard({
  setCourse,
  course,
  setDayOption,
  dayOption,
  startDate, 
  setStartDate,
  min,
  max,
  selectedTime,
  setSelectedTime,
}: FormCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "24px",
        boxShadow: "0 16px 60px rgba(99,102,241,0.10)",
        overflow: "hidden",
      }}
    >
      {/* 과정 */}
      <FormRow label="과정" first>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {COURSES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCourse(c.id)}
              style={{
                padding: "10px 22px",
                borderRadius: "10px",
                border: "2px solid",
                borderColor: course === c.id ? "#00b8f0" : "#e2e8f0",
                background:
                  course === c.id
                    ? "linear-gradient(135deg, #00b8f0, #0095d4)"
                    : "#fff",
                color: course === c.id ? "#fff" : "#475569",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {course && (
          <p
            style={{
              margin: "8px 0 0",
              fontSize: "13px",
              color: "#94a3b8",
            }}
          >
            ※ 수업과정은 강사님의 추천과정에 의해 변경될 수 있습니다.
          </p>
        )}
      </FormRow>

      {/* 수업요일 */}
      <FormRow label="수업요일">
        <div style={{ display: "flex", gap: "10px" }}>
          {DAY_OPTIONS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDayOption(d.id)}
              style={{
                padding: "10px 28px",
                borderRadius: "10px",
                border: "2px solid",
                borderColor: dayOption === d.id ? "#00b8f0" : "#e2e8f0",
                background:
                  dayOption === d.id
                    ? "linear-gradient(135deg, #00AAF0, #0095d4)"
                    : "#fff",
                color: dayOption === d.id ? "#fff" : "#475569",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {d.label}
            </button>
          ))}
        </div>
      </FormRow>

      {/* 수업시작일 */}
      <FormRow label="수업시작일">
        <Calendar
          mode="single"
          selected={startDate}
          onSelect={setStartDate}
          disabled={(date) => date < min || date > max}
       
        />
        <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#94a3b8" }}>
          ※ 선택 가능 기간: {formatDate(min)} ~ {formatDate(max)}
        </p>
      </FormRow>

      {/* 수업시간 선택 */}
      <FormRow label="수업시간 선택" last>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
            gap: "8px",
          }}
        >
          {mockTimeSlots.map((slot) => {
            const selected = selectedTime === slot.time;
            const unavailable = !slot.available;

            return (
              <button
                key={slot.time}
                type="button"
                disabled={unavailable}
                onClick={() => slot.available && setSelectedTime(slot.time)}
                style={{
                  padding: "10px 0",
                  borderRadius: "10px",
                  border: "2px solid",
                  borderColor: selected
                    ? "#00b8f0"
                    : unavailable
                      ? "#f1f5f9"
                      : "#e2e8f0",
                  background: selected
                    ? "linear-gradient(135deg, #00AAF0, #0095d4)"
                    : unavailable
                      ? "#f8fafc"
                      : "#fff",
                  color: selected
                    ? "#fff"
                    : unavailable
                      ? "#cbd5e1"
                      : "#475569",
                  fontSize: "14px",
                  fontWeight: selected ? 700 : 500,
                  cursor: unavailable ? "not-allowed" : "pointer",
                  textDecoration: unavailable ? "line-through" : "none",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                }}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
      </FormRow>
    </div>
  );
}
