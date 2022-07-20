import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import Avatar from "./Avatar";
import UtilNavBar from "./UtilNavBar";

const tasks = [
  {
    id: 1,
    name: "Create Home Page Component",
    date: "2015-01-01T00:00:00Z",
    user: "",
    description: "Create a new Home Page Component",
    status: "Not Assigned",
  },
  {
    id: 2,
    name: "Create Home Page Component",
    date: "2015-01-01T00:00:00Z",
    user: "",
    description: "Create a new Home Page Component",
    status: "Not Assigned",
  },
];

export default class CreateUserComponent extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={8}>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Asign Task</Label>
                <Input id="exampleSelect" name="select" type="select">
                  {tasks.map((task) => (
                    <option key={task.id}>{task.name}</option>
                  ))}
                </Input>
              </FormGroup>
              <Button>Create</Button>
            </Form>
          </Col>
          <Col md={4}>
            <Avatar />
          </Col>
        </Row>
      </>
    );
  }
}
