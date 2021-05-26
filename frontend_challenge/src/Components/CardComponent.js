import React from "react";
import { Col, Row } from "reactstrap";
import { Card, CardTitle, CardText, CardBody, CardSubtitle } from "reactstrap";
import { intervalToDuration } from "date-fns";

import "./card.css";

const RepoCard = (props) => {
  return (
    <div className="cardComponent">
      <Row className="Row">
        <Col xl={{ size: 1 }} className="imgColum Col">
          <img
            src={props.avatarUrl}
            width="175px"
            height="175px"
            alt="avatar"
          ></img>
        </Col>
        <Col xl={{ size: 10 }} className="cardColum">
          <Card className="Card">
            <CardBody>
              <CardTitle tag="h3">{props.repoName}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {props.repoDesc}
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <Row className="Row">
                <Col className="Col" xl={{ size: 1 }}>
                  <p className="noOfStars">
                    Stars:{" "}
                    {props.starsCount > 1000
                      ? `${(props.starsCount / 1000).toFixed(1)}k`
                      : props.starsCount}
                  </p>
                </Col>

                <Col xl={{ size: 1 }} className="Col">
                  <p className="noOfIssues">
                    Issues:{" "}
                    {props.issuesCount > 1000
                      ? `${(props.issuesCount / 1000).toFixed(1)}k`
                      : props.issuesCount}
                  </p>
                </Col>
                <Col xl={{ size: 5 }}>
                  Submitted{" "}
                  {
                    intervalToDuration({
                      start: new Date(props.createDate),
                      end: new Date(),
                    }).days
                  }{" "}
                  days ago by {props.user}
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
