import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PixelArtScreenShot from "../assets/img/TallPixelArtSS.png"
import CurrencyGenerator from "../assets/img/CurrencyGenerator.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PixelArt",
      description: "Web App where you can create a grid and paint on it.",
      imgUrl: PixelArtScreenShot,
      siteUrl: "https://classy-profiterole-869f34.netlify.app",
    },
    {
      title: "Business Startup",
      description: "CurrencyGenerator",
      imgUrl: CurrencyGenerator,
      siteUrl: "https://64f111017280135db00a8e52--frolicking-douhua-879cfe.netlify.app/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: PixelArtScreenShot,
      siteUrl: "https://storied-klepon-80062f.netlify.app/#"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: PixelArtScreenShot,
      siteUrl: "https://storied-klepon-80062f.netlify.app/#"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: PixelArtScreenShot,
      siteUrl: "https://storied-klepon-80062f.netlify.app/#"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: PixelArtScreenShot,
      siteUrl: "https://storied-klepon-80062f.netlify.app/#"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here in this area are some of the projects that I completed while attending school or completing them on my own time. My knowledge has grown over the years as my passion of becoming a web developer turned into a part time hobby!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects to come!!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects to come!!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}