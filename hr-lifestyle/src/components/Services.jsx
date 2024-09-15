import { Link } from "react-router-dom";
import styles from "./modules/About.module.css";

export default function Services() {
  return (
    <div className="services">
      <h1>OUR SERVICES</h1>

      {/* RECRUITMENT  */}
      <div className="recruitment rh">
        <div className={`left top container container-left`}></div>

        <div className={`right down container container-right`}>
          <h1>Recruitment</h1>
          <div className="line"></div>
          <p>
            Our recruitment services are designed to help you attract and select
            the best talent for your organization. We utilize advanced sourcing
            strategies, behavioral assessments, and industry insights to ensure
            you have the right people in the right roles, driving your business
            forward.
          </p>
          <ul>
            <li>Expertise And Specialization</li>
            <li>Cost Saving</li>
          </ul>

          <Link to="./services.html#recruitment">
            <button>LEARN MORE</button>
          </Link>
        </div>
      </div>

      {/* TALENT MGT */}
      <div className="talent-mgt lh">
        <div className="left top container container-left">
          <h1>
            Talent <br />
            Management
          </h1>
          <div className="line"></div>
          <p>
            We provide talent management solutions that nurture and develop your
            employees. From performance management to leadership development,
            our services are aimed at maximizing your workforce's potential and
            aligning it with your business goals.
          </p>

          <ul>
            <li>Cost Saving</li>
            <li>Flexibility and Scalability</li>
            <li>Talent Acquisition and Retention</li>
            <li>Development and Training</li>
            <li>Conflict Resolution and Employee Relation</li>
          </ul>
          <Link to="./services.html#talent-mgt">
            <button>LEARN MORE</button>
          </Link>
        </div>

        <div className="right down container container-right"></div>
      </div>

      {/* TRAINING & DEV */}
      <div className="training-dev rh">
        <div className="left top container container-left"></div>

        <div className="right down container container-right">
          <h1>
            Training & <br />
            Development
          </h1>
          <div className="line"></div>
          <p>
            Our tailored training programs are designed to enhance the skills
            and competencies of your workforce. Whether it's technical skills,
            soft skills, or leadership training, we create development plans
            that are aligned with your organizational objectives.
          </p>
          <ul>
            <li>Talent Acquisition and Retention</li>
            <li>Technology Integration and Innovation</li>
            <li>Development and Training</li>
          </ul>
          <Link to="./services.html#training-dev">
            <button>LEARN MORE</button>
          </Link>
        </div>
      </div>

      {/* HR STRATEGIES & POLICIES  */}
      <div className="strat-pol lh">
        <div className="left top container container-left">
          <h1>
            HR Strategies <br />
            and Policies
          </h1>
          <div className="line"></div>
          <p>
            We help organizations develop and implement effective HR strategies
            and policies that support business growth and compliance. From
            workforce planning to employee relations, our services ensure that
            your HR practices are both strategic and operationally sound.
          </p>

          <ul>
            <li>Expertise And Specialization</li>
            <li>Compliance and Risk Management</li>
            <li>Flexibility and Scalability</li>
            <li>Strategic Planning And Business Growth</li>
          </ul>
          <Link to="./services.html#strat-pol">
            <button>LEARN MORE</button>
          </Link>
        </div>

        <div className="right down container container-right"></div>
      </div>

      {/* HR BUSINESS PARTNER  */}
      <div className="hr-business-partner rh">
        <div className="left top container container-left"></div>

        <div className="right down container container-right">
          <h1>
            HR Business <br />
            Partner Services
          </h1>
          <div className="line"></div>
          <p>
            At HRlifestyle, we understand that effective human resource
            management is the backbone of any successful organization. Our HR
            Business Partner services are designed to strategically align your
            HR functions with your overall business goals. As your HR Business
            Partner, we work closely with your leadership team to deliver
            tailored solutions that foster a productive and engaged workforce.
            Partner with us to transform your HR operations into a strategic
            asset that propels your business forward.
          </p>
          <ul>
            <li>Strategic Alignment</li>
            <li>Strategic Planning And Business Growth</li>
          </ul>

          <Link to="./services.html#hr-business-partner">
            <button>LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
