import { Col } from "react-bootstrap";
import { Projects } from "./Projects";


export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="siteUrlLink" href={siteUrl} target="_blank">
        <div className="proj-imgbx">
          <img className="ProjectImage" src={imgUrl}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>

          </div>
        </div>
      </a>
    </Col>
  )
}