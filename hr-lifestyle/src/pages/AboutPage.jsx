import TopColor from "../components/TopColor";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import BreadCrumbs from "../components/BreadCrumbs";
import FloatingActionButton from "../components/FloatingActionButton";
export default function AboutPage({ toggleModal, isModalOpen, closeModal }) {
  const title = "ABOUT US";

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
        className="about-page"
        breadcrumbs={<BreadCrumbs title={title} />}
      />
      <div className="about-main">
        <div className="brief">
          <h1>ABOUT HR-LIFESTYLE</h1>
          <hr />
          <p>
            HR Lifestyle is an innovative online HR firm dedicated to
            transforming the HR landscape with cutting-edge solutions. We offer
            a comprehensive suite of services, including recruitment, talent
            management, employee development, and HR consulting, tailored to
            meet the evolving needs of modern businesses. With a commitment to
            excellence and a belief in the power of human capital, we empower
            organizations to thrive in today's dynamic work environment. <br />
            <br />
            Our team of seasoned experts combines deep industry knowledge with a
            client-centric approach to deliver results-driven strategies and
            personalized guidance. Whether you are an individual seeking to
            secure your financial future or a business striving for sustainable
            growth, we are here to help you navigate the complex world of
            finance and make informed decisions. <br />
            <br />
            Through our wealth management partners, we assist our clients in
            preserving and growing their assets, creating customized investment
            strategies, and ensuring long-term financial stability. Our
            financial advisory services offer strategic insights, risk
            management solutions, and comprehensive financial planning to help
            you make sound financial choices.
          </p>
        </div>

        <div className="values">
          <div className="left">
            <div className="core wrap">
              <h1>CORE VALUES:</h1>
              <hr />
              <p>
                Ethical Conduct, Innovation, Empowerment and Social
                Responsibility from the basis of our work culture as we strive
                to fulfill our mission and achieve our vision.
              </p>
            </div>

            <div className="vision wrap">
              <h1>VISION:</h1>
              <hr />
              <p>
                Empowering organizations to build exceptional workplace where
                employees thrive and businesses succeed alongside providing
                innovative HR solutions setting standards for excellence and
                driving meaningful impact while cutting _edge technology and
                best practices to revolutionize HR practices creating lasting
                value for clients, employees and the community, enabling
                unparalleled organization success.
              </p>
            </div>

            <div className="mission wrap">
              <h1>MISSION:</h1>
              <hr />
              <p>
                HR Lifestyle is dedicated to redefining the HR experience
                through innovative solutions that empowers organization to
                attract, retain and develop top talent, driving business
                performance and fostering a culture of excellence. With
                strategic partnerships and a commitment to client satisfaction,
                we aim to be the trusted HR partner that enables business to
                thrive in an ever _ changing world. Our mission is to deliver
                personalized, growth focused solutions that elevate the HR
                landscape for businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="right"></div>
        </div>

        <div className="why-us">
          <div className="left"></div>

          <div className="right">
            <h1>
              WHY CHOOSE <br />
              HR-LIFESTYLE
            </h1>
            <div className="point">
              <p>
                At HRLifestyle, we believe that a thriving workplace starts with
                the right people and the right strategies.
              </p>
            </div>

            <div className="point">
              <i className="bi bi-check-circle-fill"></i>
              <p>
                Proven Results: Our track record speaks for itself. We’ve helped
                countless organizations improve their HR processes, increase
                employee satisfaction, and boost overall productivity.
              </p>
            </div>

            <div className="point">
              <i className="bi bi-check-circle-fill"></i>
              <p>
                Client-Centered: Your success is our priority. We build lasting
                relationships with our clients, offering ongoing support and
                adapting to your evolving business needs.
              </p>
            </div>

            <div className="point">
              <i className="bi bi-check-circle-fill"></i>
              <p>
                Tailored Solutions: We understand that every business is unique.
                Our bespoke HR strategies are designed to meet the specific
                needs of your organization, ensuring optimal results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FloatingActionButton />
      <Footer />
    </div>
  );
}
