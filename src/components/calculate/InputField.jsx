import { useState } from "react";
import PropTypes from "prop-types";

const InputField = ({ label, left, top, width, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (onClick) {
      onClick();
    }
  };

  const buttonStyle = {
    position: "absolute",
    paddingTop: "1.5rem",
    paddingBottom: "1rem",
    borderRadius: "0.25rem",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isSelected ? "blue" : "gray",
    color: isSelected ? "white" : "black",
    height: "30px",
    left: `${left}px`,
    top: `${top}px`,
    width: `${width}px`,
  };

  const hoverStyle = {
    backgroundColor: "darkgray",
  };

  return (
    <button
      style={isSelected ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onClick={handleClick}
    >
      <div className="text-sm font-normal font-['Inter'] leading-snug">
        {label}
      </div>
    </button>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default InputField;
