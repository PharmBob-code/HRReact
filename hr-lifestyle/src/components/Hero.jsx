import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="display-text">
          <h1>ELEVATE YOUR WORKFORCE, ELEVATE YOUR BUSINESS</h1>
        </div>
        <div className="description-text">
          <p>
            At HRlifestyle, we’re passionate about empowering your organization
            to reach its full potential. Our bespoke HR solutions are designed
            to strengthen every aspect of your workforce- from strategic
            recruitment to nurturing employee growth and cultivating a vibrant
            workplace culture. we’re here to help you build a motivated and
            high-performing team. Partner with us to develop a people-focused
            approach drives your business success and creates a thriving work
            environment.
          </p>
        </div>
        <Link to={"/services"}>
          <button>LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
}
