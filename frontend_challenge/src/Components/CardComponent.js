import React from "react";
import { Col, Row } from "reactstrap";
import { Card, CardTitle, CardText, CardBody, CardSubtitle } from "reactstrap";
import "./card.css";

const RepoCard = (props) => {
  return (
    <div className="cardComponent">
      <Row sm="12">
        <Col sm={{ size: 1 }} md={{ size: 1 }} className="imgColum">
          <img
            src={props.avatarUrl}
            width="175px"
            height="175px"
            alt="avatar"
          ></img>
        </Col>
        <Col sm={{ size: 10 }} md={{ size: 10 }} className="cardColum">
          {/* <Col className="cardColum"> */}
          <Card className="Card">
            <CardBody>
              <CardTitle tag="h3">{props.repoName}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {props.repoDesc}
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <Row>
                <Col className="noOfStars" sm={{ size: 2 }} md={{ size: 2 }}>
                  Stars: {props.starsCount}
                </Col>
                <Col className="noOfIssues" sm={{ size: 2 }} md={{ size: 2 }}>
                  Issues: {props.issuesCount}
                </Col>
                <Col sm={{ size: 7 }} md={{ size: 7 }}>
                  Submitted 30 days ago by tenserflow
                </Col>
              </Row>
              <CardText> </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default RepoCard;
