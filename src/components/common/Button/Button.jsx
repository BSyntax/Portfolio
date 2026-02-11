import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, buttonAction, type = "button" }) {
  return (
    <button onClick={buttonAction} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  type: PropTypes.string,
};
