type ActionButtonsProps = {
  handleSubmit: () => void;
  handleReset: () => void;
};

const ActionButtons = ({ handleSubmit, handleReset }: ActionButtonsProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "24px",
        justifyContent: "center",
      }}
    >
      {/* 신청 버튼 */}
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: "15px 56px",
          background: "linear-gradient(135deg, #00AAF0, #0095d4)",
          color: "#fff",
          border: "1px solid #0095d4",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0,170,240,0.28)",
          transition: "transform 0.15s, box-shadow 0.15s",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,170,240,0.38)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,170,240,0.28)";
        }}
      >
        신청
      </button>

      {/* 취소 버튼 */}
      <button
        type="button"
        onClick={handleReset}
        style={{
          padding: "15px 40px",
          background: "#ffffff",
          color: "#007fb5",
          border: "1px solid #B3EAFF",
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.15s",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#f0fbff";
          e.currentTarget.style.borderColor = "#00AAF0";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#ffffff";
          e.currentTarget.style.borderColor = "#B3EAFF";
        }}
      >
        취소
      </button>
    </div>
  );
};

export default ActionButtons;
