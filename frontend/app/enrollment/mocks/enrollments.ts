export interface TimeSlot {
  time: string;
  available: boolean;
}
export const mockTimeSlots = [
  { time: "12:00", available: false },
  { time: "12:25", available: true },
  { time: "12:50", available: true },
  { time: "13:15", available: false },
  { time: "13:40", available: true },
  { time: "14:05", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: false },
  { time: "15:25", available: true },
];
export const COURSES = [
  { id: "smart-phonics", label: "스마트파닉스" },
  { id: "travel-english", label: "여행영어" },
  { id: "free-talking", label: "프리토킹" },
];
export const DAY_OPTIONS = [
  { id: "mon-wed-fri", label: "월 · 수 · 금" },
  { id: "tue-thu", label: "화 · 목" },
];