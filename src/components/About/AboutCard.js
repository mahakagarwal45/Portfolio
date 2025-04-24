import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahak Agarwal</span> from{" "}
            <span className="purple">Hapur, Uttar Pradesh, India</span>.
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering (AI & DL)
            at <span className="purple">Mody University of Science and Technology, Rajasthan</span>.
            <br />
            I’m passionate about <span className="purple">Machine Learning, Full-Stack Web Development, Data Analysis and Software Development</span>
            and building impactful projects that promote <span className="purple">healthy lifestyle, smart education</span>
            and social good.
            <br />
            <br />
            When I’m not coding or exploring tech, I enjoy engaging in other activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Tech Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and Sharing Knowledge through Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Build with passion. Learn endlessly."{" "}
          </p>
          <footer className="blockquote-footer">Mahak Agarwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
