import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCTION</span> 
            </h1>
            <p className="home-about-body">
            <div className="home-about-body">
  <p>
    My name is Clark, and I have a passion for learning new technologies and channeling that knowledge into creating innovative solutions. With a background in various programming languages, including Java, JavaScript, and Python, I've explored the vast landscape of software development.
  </p>
  <p>
    One of my primary interests lies in crafting cutting-edge web technologies and mobile applications. I've had the opportunity to build mobile apps using React Native, a framework that allows me to develop cross-platform applications efficiently. This experience has given me a deeper understanding of mobile development, user interface design, and the intricacies of working with different platforms.
  </p>
  <p>
    In addition to my fascination with mobile app development, I find myself drawn to the captivating fields of Machine Learning and Natural Language Processing. Exploring the potential of these domains, I've ventured into the world of data science, gaining hands-on experience through online Udemy classes. These courses have provided me with a solid foundation in Python and its data science libraries, such as Pandas. Through these studies, I've learned how to manipulate and analyze data, enabling me to extract valuable insights and make data-driven decisions.
  </p>
  <p>
    My coding classes have played a pivotal role in enhancing my problem-solving skills and analytical thinking. The knowledge and skills I've gained from these classes have been instrumental in my journey as a tech enthusiast and creator. I've harnessed these skills to build applications, make informed business decisions, and continuously evolve in the ever-changing tech landscape.
  </p>
  <p>
  </p>
  <p>
    As I continue to explore the dynamic world of technology, I'm eager to embrace new challenges, expand my knowledge, and contribute to the ever-evolving tech industry. My passion for learning and creating will undoubtedly fuel my journey as I strive to make a positive impact through technology.
  </p>
</div>
              <br />
              <br />
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1></h1>
            <p>
               <span className="purple"> </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/clark-jones-547400256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
