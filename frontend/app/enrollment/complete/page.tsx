"use client";

import { COLORS } from "@/app/enrollment/constants/colors";
import { DAY_LABELS, ENROLLMENT_DATA } from '@/app/enrollment/complete/mocks/complete';
import { formatTimeRange } from '@/app/enrollment/complete/utils/DateUtils';
import InfoRow from '@/app/enrollment/complete/components/InfoRow';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function EnrollmentConfirmPage() {
  const d = ENROLLMENT_DATA;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0fbff 0%, #ffffff 100%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif",
        padding: "48px 16px 80px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "680px" }}>
        <div
          style={{
            background: COLORS.white,
            borderRadius: "20px",
            padding: "28px 32px",
            marginBottom: "16px",
            boxShadow: "0 4px 24px rgba(0,184,240,0.08)",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
         {/* 아바타 */}
<Avatar className="h-16 w-16 shrink-0 shadow-[0_6px_20px_rgba(0,184,240,0.3)]">
  <AvatarFallback
    className="text-lg font-extrabold text-white"
    style={{
      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
    }}
  >
    {d.tutor.tutor_name.slice(0, 2)}
  </AvatarFallback>
</Avatar>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "4px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#1e293b",
                }}
              >
                {d.tutor.tutor_name}
              </span>

              <Badge className="bg-sky-50 text-sky-700">
                담당 강사
              </Badge>

              <span
                style={{
                  fontSize: "13px",
                  color: COLORS.textMuted,
                }}
              >
                {d.tutor.tutor_code}
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#64748b",
                lineHeight: 1.6,
              }}
            >
              {d.course.course_name} 수업을 담당하는 강사입니다.
            </p>
          </div>
        </div>

        <div
          style={{
            background: COLORS.white,
            borderRadius: "20px",
            padding: "28px 32px",
            marginBottom: "16px",
            boxShadow: "0 4px 24px rgba(0,184,240,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "18px",
                background: `linear-gradient(180deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
                borderRadius: "2px",
              }}
            />

            <h2
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 800,
                color: "#1e293b",
              }}
            >
              수강 정보
            </h2>
          </div>

          <p
            style={{
              margin: "0 0 16px 11px",
              fontSize: "13px",
              color: COLORS.textMuted,
            }}
          >
            신청하신 수업 상세 내용을 확인하세요.
          </p>

          <InfoRow
            label="강좌"
            value={
              <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                {d.course.course_name}
              </Badge>
            }
          />

          <InfoRow label="담당 강사" value={d.tutor.tutor_name} />

          <InfoRow
            label="수업 요일"
            value={DAY_LABELS[d.available_time.day_of_week]}
          />

          <InfoRow label="수업 시작일" value={d.start_date} accent />

          <InfoRow
            label="수업 시간"
            value={formatTimeRange(
              d.available_time.start_time,
              d.available_time.end_time,
            )}
            accent
          />
        </div>
        <div
          style={{
            background: COLORS.white,
            borderRadius: "20px",
            padding: "28px 32px",
            marginBottom: "20px",
            boxShadow: "0 4px 24px rgba(0,184,240,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "18px",
                background: `linear-gradient(180deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
                borderRadius: "2px",
              }}
            />

            <h2
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 800,
                color: "#1e293b",
              }}
            >
              수업 방식 안내
            </h2>
          </div>
        </div>

        {/* TODO: 수업 방식 내용 추가 */}
      </div>
    </div>
  );
}