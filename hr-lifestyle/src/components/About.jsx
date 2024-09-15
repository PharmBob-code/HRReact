import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about">
      <div className={`left container container-left`}>
        <h1>
          ABOUT <br />
          HR-LIFESTYLE
        </h1>
        <div className="line"></div>
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

      <div className={`right container container-right`}></div>
    </div>
  );
}
