import React from "react";
import { Link } from "react-router-dom";
export default function FloatingActionButton() {
  return (
    <a href="https://sites.google.com/view/hrlifestyle/home" target="_blank">
      <button className="fab rotating blinking">
        {/* Add your button content here, e.g., an icon */}
        Professional Summary
      </button>
    </a>
  );
}
