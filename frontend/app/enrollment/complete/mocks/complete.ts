export const ENROLLMENT_DATA = {
  enrollment_id: 1,

  student_name: "김민준",

  course: {
    course_id: 1,
    course_name: "여행영어",
  },

  tutor: {
    tutor_id: 1,
    tutor_code: "TUTOR001",
    tutor_name: "Sarah Johnson",
    email: "sarah@example.com",
  },

  available_time: {
    available_time_id: 1,
    tutor_id: 1,
    day_of_week: "MON",
    start_time: "19:20",
    end_time: "19:45",
  },
  start_date: "2026-05-11",
};

export const DAY_LABELS: Record<string, string> = {
  MON: "월요일",
  TUE: "화요일",
  WED: "수요일",
  THU: "목요일",
  FRI: "금요일",
  SAT: "토요일",
  SUN: "일요일",
};
