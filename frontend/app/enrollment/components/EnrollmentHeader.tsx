import React from 'react'

const EnrollmentHeader = () => {
  return (
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
  );
}

export default EnrollmentHeader
