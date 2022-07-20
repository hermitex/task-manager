import React from "react";
import { Col, Row } from "reactstrap";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function CreateTaskComponent({
  handleChange,
  handleSubmit,
  formData,
  taskData,
}) {
  return (
    <>
      <Row>
        <Col md={8}>
          <TaskList
            handleChange={handleChange}
            formData={formData}
            handleSubmit={handleSubmit}
            taskData={taskData}
          />
        </Col>
        <Col md={4}>
          <TaskForm
            handleChange={handleChange}
            formData={formData}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </>
  );
}
