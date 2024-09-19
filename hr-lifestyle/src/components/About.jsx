import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about__left left">
        <h1>
          ABOUT <br />
          HR-LIFESTYLE
        </h1>
        <div className="about__line"></div>
        <p>
          At HR-Lifestyle, our mission is to cultivate balanced and productive
          work environments that foster both individual and organizational
          success. We are committed to empowering HR professionals and
          businesses with innovative solutions that enhance workplace culture
          and drive career growth.
        </p>
        <Link to={"/about_us"}>
          <button>LEARN MORE</button>
        </Link>
      </div>

      <div className="right"></div>
    </div>
  );
}
