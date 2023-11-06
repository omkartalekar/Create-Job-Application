import PrimaryButton from "../Component/PrimaryButton";
import SecondaryButton from "../Component/SecondaryButton";

export function renderApplyButton(applyType) {
  if (applyType === "Quick apply") {
    return (
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <PrimaryButton text="Apply Now" />
      </div>
    );
  } else if (applyType === "External apply") {
    return (
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <SecondaryButton text="External Apply" />
      </div>
    );
  }
}
