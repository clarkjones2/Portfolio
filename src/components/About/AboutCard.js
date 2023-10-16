import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is  <span className="purple">Clark Jones </span>
            from <span className="purple"> Kirkland, Washington.</span>
            <div>
      <p>I'm a junior at the University of Washington Bothell, working toward a degree in Management Information Systems (MIS). I've lived in Kirkland my whole life and have a bunch of interests including fitness, traveling, reading, and more. I have always had an interest in technology and computers and am now passionate about learning all about different technologies and how business plays an impact on it. </p>
      <p>Ever since I was a kid, I've been curious about technology and computers. Now, in college, I'm even more enthusiastic about digging into the world of tech. My MIS program is helping me understand how businesses use technology to make things work better and how it's always changing.</p>
      <p>In the fast-paced world of MIS, my goal is to combine my tech interest with what I'm learning about how businesses work. I want to be part of the tech revolution and contribute to making things even better. Every day, I'm looking forward to the challenges and opportunities that come with pursuing my MIS degree at UW Bothell.
</p>
    </div>
            <br />
            Some things I am interested in include
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile App Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
