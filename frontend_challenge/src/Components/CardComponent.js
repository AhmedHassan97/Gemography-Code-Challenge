import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardLink,
  CardSubtitle,
} from "reactstrap";
import "./card.css";

const RepoCard = (props) => {
  return (
    <div className="cardComponent">
      <Row sm="12">
        <Col sm={{ size: 1 }} md={{ size: 1 }} className="imgColum">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            width="175px"
            height="175px"
          ></img>
        </Col>
        <Col sm={{ size: 10 }} md={{ size: 10 }} className="cardColum">
          {/* <Col className="cardColum"> */}
          <Card className="Card">
            <CardBody>
              <CardTitle tag="h3">Repositry Name</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Rerpositry Describtion
              </CardSubtitle>
            </CardBody>
            <CardBody>
              <Row>
                <Col className="noOfStars" sm={{ size: 2 }} md={{ size: 2 }}>
                  no. of stars
                </Col>
                <Col className="noOfIssues" sm={{ size: 2 }} md={{ size: 2 }}>
                  no. of stars
                </Col>
                <Col sm={{ size: 7 }} md={{ size: 7 }}>
                  Submitted date
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
