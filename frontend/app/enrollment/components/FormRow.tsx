import React from "react";

const  FormRow= ({
  label,
  children,
  first,
  last,
}: {
  label: string;
  children: React.ReactNode;
  first?: boolean;
  last?: boolean;
})=>  {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: "0",
        borderBottom: last ? "none" : "1px solid #f1f5f9",
        padding: "28px 32px",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "15px",
          color: "#475569",
          paddingTop: "10px",
          paddingRight: "16px",
        }}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}
export default FormRow;