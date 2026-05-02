import { COLORS } from '@/app/enrollment/constants/colors';
import { ReactNode } from 'react';

const  InfoRow=({
  label,
  value,
  accent,
}: {
  label: string;
  value: ReactNode;
  accent?: boolean;
}) =>{
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 0",
        borderBottom: `1px solid ${COLORS.divider}`,
      }}
    >
      <span
        style={{
          fontSize: "14px",
          color: COLORS.textMuted,
          fontWeight: 500,
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontSize: "15px",
          color: accent ? COLORS.primary : "#1e293b",
          fontWeight: accent ? 700 : 600,
        }}
      >
        {value}
      </span>
    </div>
  );
}
export default InfoRow