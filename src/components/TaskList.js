import React from "react";
import { Table } from "reactstrap";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import UtilNavBar from "./UtilNavBar";

function TaskList({
  handleChange,
  handleSubmit,
  taskData,
  formData,
  showNavBar,
}) {
  return (
    <>
      {showNavBar ? (
        <UtilNavBar
          form={
            <TaskForm
              handleChange={handleChange}
              formData={formData}
              handleSubmit={handleSubmit}
            />
          }
        />
      ) : (
        ""
      )}

      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Creation Date</th>
            <th>Submission Date</th>
            <th>Description</th>
            <th>Files</th>
            <th>Assignee</th>
            <th>Approved</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.taskName}
              creationDate={task.creationDate}
              submissionDate={task.submissionDate}
              description={task.description}
              files={task.files}
              assignee={task.assignee}
              approved={task.approved}
              status={task.status}
              durationType={task.durationType}
              duration={task.duration}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TaskList;
