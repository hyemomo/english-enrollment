import FormRow from "@/app/enrollment/components/FormRow";
import { COLORS, GRADIENTS } from "@/app/enrollment/constants/colors";
import {
  COURSES,
  DAY_OPTIONS,
  mockTimeSlots,
} from "@/app/enrollment/mocks/enrollments";
import { formatDate } from "@/app/enrollment/utils/DateUtils";
import EnrollmentCalendar from '@/components/ui/EnrollmentCalendar';

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
        background: COLORS.white,
        borderRadius: "24px",
        boxShadow: COLORS.cardShadow,
        overflow: "hidden",
      }}
    >
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
                borderColor: course === c.id ? COLORS.primary : COLORS.border,
                background: course === c.id ? GRADIENTS.primary : COLORS.white,
                color: course === c.id ? COLORS.white : COLORS.text,
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
              color: COLORS.textMuted,
            }}
          >
            ※ 수업과정은 강사님의 추천과정에 의해 변경될 수 있습니다.
          </p>
        )}
      </FormRow>

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
                borderColor:
                  dayOption === d.id ? COLORS.primary : COLORS.border,
                background:
                  dayOption === d.id ? GRADIENTS.primary : COLORS.white,
                color: dayOption === d.id ? COLORS.white : COLORS.text,
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

      <FormRow label="수업시작일">
        <EnrollmentCalendar
          variant="primary"
          mode="single"
          selected={startDate}
          onSelect={setStartDate}
          disabled={(date) => date < min || date > max}
        />
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "13px",
            color: COLORS.textMuted,
          }}
        >
          ※ 선택 가능 기간: {formatDate(min)} ~ {formatDate(max)}
        </p>
      </FormRow>

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
                    ? COLORS.primary
                    : unavailable
                      ? COLORS.disabledBorder
                      : COLORS.border,
                  background: selected
                    ? GRADIENTS.primary
                    : unavailable
                      ? COLORS.disabledBg
                      : COLORS.white,
                  color: selected
                    ? COLORS.white
                    : unavailable
                      ? COLORS.disabledText
                      : COLORS.text,
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
