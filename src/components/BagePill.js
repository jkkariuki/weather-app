import React from "react";

function BadgePill(props) {
  const { label, labelValue, other } = props;
  return (
    <span className="badge badge-pill">
      {label} {labelValue}
    </span>
  );
}

export default BadgePill;
