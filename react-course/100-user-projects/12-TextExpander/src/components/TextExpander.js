import React from "react";

export default function TextExpander({
  collapsedNumWords = 20,
  expandButtonText = "Show Text",
  collapseButtonText = "Hide Text",
  buttonColor = "blue",
  className = "",
  children,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const buttonStyle = {
    border: "none",
    background: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "5px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>
        {expanded
          ? children
          : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."}
      </span>
      <button style={buttonStyle} onClick={() => setExpanded(!expanded)}>
        {expanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
