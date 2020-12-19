/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import AboutInfo from "components/AboutInfo.jsx";
import AboutInfo1 from "components/AboutInfo1.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


import avatar from "assets/img/faces/face-3.jpg";
import TeamInfo from "components/TeamInfo";
import TeamMembers from "components/TeamMembers";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                style={{textAligh : "center"}}
                title="What is Foodbank?"
                content={
                  <AboutInfo />
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="How we work?"
                content={
                  <AboutInfo1 />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Card
            title="Our Team"
                content={
              <TeamInfo />
            }
              />
            </Col>
            </Row>
          <TeamMembers/>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
