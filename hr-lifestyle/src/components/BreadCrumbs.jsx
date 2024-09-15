import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbs(props) {
  const chevronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
  return (
    <div className="breadcrumbs">
      <Link to="/">
        <p>Home</p>
      </Link>
      <span> {chevronRight} </span>
      <Link to="/about">
        <p className="breadcrumbs-title">{props.title.toLowerCase()}</p>
      </Link>
    </div>
  );
}
