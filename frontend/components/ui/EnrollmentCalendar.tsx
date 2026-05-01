"use client";

import { COLORS } from "@/app/enrollment/constants/colors";
import { Calendar } from "@/components/ui/calendar";
import type { ComponentProps, CSSProperties } from "react";

const CALENDAR_VARIANTS = {
  primary: {
    primary: COLORS.primary,
    primaryDark: COLORS.primaryDark,
    primarySoft: COLORS.primarySoft,
  },
  neutral: {
    primary: COLORS.text,
    primaryDark: COLORS.text,
    primarySoft: COLORS.disabledBg,
  },
} as const;

export type CalendarVariant = keyof typeof CALENDAR_VARIANTS;

type EnrollmentCalendarProps = ComponentProps<typeof Calendar> & {
  variant?: CalendarVariant;
};

export default function EnrollmentCalendar({
  variant = "primary",
  classNames,
  style,
  ...props
}: EnrollmentCalendarProps) {
  const colors = CALENDAR_VARIANTS[variant];

  return (
    <Calendar
      {...props}
      style={
        {
          "--calendar-primary": colors.primary,
          "--calendar-primary-dark": colors.primaryDark,
          "--calendar-primary-soft": colors.primarySoft,
          ...style,
        } as CSSProperties
      }
      classNames={{
        ...classNames,
        today: "border-none bg-transparent text-inherit",
        day: `${classNames?.day || ""} [&[data-selected=true]_button]:bg-[var(--calendar-primary)] [&[data-selected=true]_button]:text-white [&[data-selected=true]_button]:hover:bg-[var(--calendar-primary-dark)]`,
      }}
    />
  );
}
