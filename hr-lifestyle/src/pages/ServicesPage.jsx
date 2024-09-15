import TopColor from "../components/TopColor";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import BreadCrumbs from "../components/BreadCrumbs";
import FloatingActionButton from "../components/FloatingActionButton";
import { Link } from "react-router-dom";
export default function ServicesPage({ toggleModal, isModalOpen, closeModal }) {
  const title = "SERVICES";
  return (
    <div>
      <TopColor />
      <Navbar
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <PageHeader
        title={title}
        className="services-page"
        breadcrumbs={<BreadCrumbs title={title} />}
      />
      <div className="our-services">
        <div className="our-services-top">
          <h1>OUR SERVICES</h1>

          <p className="para">
            <em>
              At HR Lifestyle, we offer a comprehensive range of services
              tailored to meet the unique needs of your organization. Our
              expertise spans across various HR functions, ensuring that your
              company thrives with a well-managed and motivated workforce.
              Explore our service offerings below:
            </em>
          </p>
        </div>

        <div className="our-services-container">
          {/* <!-- RECRUITMENT --> */}
          <section className="recruitment rh" id="recruitment">
            <div className="left top"></div>

            <div className="right down">
              <h1>Recruitment</h1>
              <div className="line"></div>
              <p>
                Our recruitment services are designed to help you attract and
                select the best talent for your organization. We utilize
                advanced sourcing strategies, behavioral assessments, and
                industry insights to ensure you have the right people in the
                right roles, driving your business forward.
              </p>
              <ul>
                <li className="title">How We Achieve This:</li>
                <ul>
                  <li>
                    Conduct in-depth job analysis to understand your needs.
                  </li>
                  <li>
                    Utilize advanced sourcing techniques to find top talent.
                  </li>
                  <li>Implement a thorough screening and interview process.</li>
                  <li>Provide seamless onboarding support.</li>
                </ul>
              </ul>

              <Link to="/contact">
                <button>Get in Touch</button>
              </Link>
            </div>
          </section>

          {/* <!-- TALENT MGT --> */}
          <div className="talent-mgt lh" id="talent-mgt">
            <div className="left top">
              <h1>
                Talent <br />
                Management
              </h1>
              <div className="line"></div>
              <p>
                We provide talent management solutions that nurture and develop
                your employees. From performance management to leadership
                development, our services are aimed at maximizing your
                workforce's potential and aligning it with your business goals.
              </p>
              <ul>
                <li className="title">How We Achieve This:</li>
                <ul>
                  <li>
                    Design personalized development plans for key employees.
                  </li>
                  <li>
                    Implement performance management systems that drive
                    excellence.
                  </li>
                  <li>Develop retention strategies to minimize turnover.</li>
                  <li>
                    Foster employee engagement through continuous feedback and
                    recognition.
                  </li>
                </ul>
              </ul>
              <Link to="/contact">
                <button>Get in Touch</button>
              </Link>
            </div>

            <div className="right down"></div>
          </div>

          {/* <!-- TRAINING & DEV --> */}
          <div className="training-dev rh" id="training-dev">
            <div className="left top"></div>

            <div className="right down">
              <h1>
                Training & <br />
                Development
              </h1>
              <div className="line"></div>
              <p>
                Our tailored training programs are designed to enhance the
                skills and competencies of your workforce. Whether it's
                technical skills, soft skills, or leadership training, we create
                development plans that are aligned with your organizational
                objectives.
              </p>

              <ul>
                <li className="title">How We Achieve This:</li>
                <ul>
                  <li>Conduct needs assessments to identify skill gaps.</li>
                  <li>
                    Develop tailored training programs to address specific
                    needs.
                  </li>
                  <li>Deliver interactive and practical training sessions.</li>
                  <li>
                    Measure the impact of training on employee performance.
                  </li>
                </ul>
              </ul>

              <Link to="/contact">
                <button>Get in Touch</button>
              </Link>
            </div>
          </div>

          {/* <!-- HR STRATEGIES & POLICIES --> */}
          <div className="strat-pol lh" id="strat-pol">
            <div className="left top">
              <h1>
                HR Strategies <br />
                and Policies
              </h1>
              <div className="line"></div>
              <p>
                We help organizations develop and implement effective HR
                strategies and policies that support business growth and
                compliance. From workforce planning to employee relations, our
                services ensure that your HR practices are both strategic and
                operationally sound.
              </p>

              <ul>
                <li className="title">How We Achieve This:</li>
                <ul>
                  <li>
                    Analyze your current HR practices and identify areas for
                    improvement.
                  </li>
                  <li>
                    Develop customized HR strategies that support your business
                    objectives.
                  </li>
                  <li>
                    Ensure compliance with labor laws and industry regulations.
                  </li>
                  <li>
                    Create clear, comprehensive policies to guide your
                    organization.
                  </li>
                </ul>
              </ul>

              <Link to="/contact">
                <button>Get in Touch</button>
              </Link>
            </div>

            <div className="right down"></div>
          </div>

          {/* <!-- HR BUSINESS PARTNER --> */}
          <div className="hr-business-partner rh" id="hr-business-partner">
            <div className="left top"></div>

            <div className="right down">
              <h1>HR Business Partner Services</h1>
              <div className="line"></div>
              <p>
                At HRlifestyle, we understand that effective human resource
                management is the backbone of any successful organization. Our
                HR Business Partner services are designed to strategically align
                your HR functions with your overall business goals. As your HR
                Business Partner, we work closely with your leadership team to
                deliver tailored solutions that foster a productive and engaged
                workforce. Partner with us to transform your HR operations into
                a strategic asset that propels your business forward.
              </p>
              <ul>
                <li className="title">How We Achieve This:</li>
                <ul>
                  <li>Expertise And Specialization</li>
                  <li>Cost Saving</li>
                </ul>
              </ul>

              <Link to="/contact">
                <button>Get in Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FloatingActionButton />
      <Footer />
    </div>
  );
}
