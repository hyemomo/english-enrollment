import { COLORS, GRADIENTS } from "@/app/enrollment/constants/colors";
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
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: "15px 56px",
          background: GRADIENTS.primary,
          color: COLORS.white,
          border: `1px solid ${COLORS.primaryDark}`,
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: COLORS.primaryShadow,
          transition: "transform 0.15s, box-shadow 0.15s",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = COLORS.primaryShadowHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = COLORS.primaryShadow;
        }}
      >
        신청
      </button>

      <button
        type="button"
        onClick={handleReset}
        style={{
          padding: "15px 40px",
          background: COLORS.white,
          color: COLORS.primaryText,
          border: `1px solid ${COLORS.primaryLight}`,
          borderRadius: "14px",
          fontSize: "17px",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.15s",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = COLORS.primarySoft;
          e.currentTarget.style.borderColor = COLORS.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = COLORS.white;
          e.currentTarget.style.borderColor = COLORS.primaryLight;
        }}
      >
        취소
      </button>
    </div>
  );
};

export default ActionButtons;