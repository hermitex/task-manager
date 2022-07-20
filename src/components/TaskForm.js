import React from "react";
import { Form, Button, FormGroup, FormText, Input, Label } from "reactstrap";

function TaskForm({ handleChange, formData, handleSubmit }) {
  console.log(formData);
  return (
    <Form>
      <FormGroup>
        <Label for="taskName">Task Name</Label>
        <Input
          id="taskName"
          name="taskName"
          placeholder="Task Name"
          type="text"
          onChange={handleChange}
          value={formData.taskName}
        />
      </FormGroup>
      <FormGroup>
        <Label for="creationDate">Creation Date</Label>
        <Input
          id="creationDate"
          name="creationDate"
          placeholder="Creation Date"
          type="date"
          onChange={handleChange}
          value={formData.creationDate}
        />
      </FormGroup>
      <FormGroup>
        <Label for="duration">Duration In</Label>
        <span>
          <FormGroup tag="fieldset" className="d-flex space-between">
            <FormGroup check>
              <Input
                id="durationType"
                name="radio"
                type="radio"
                onChange={handleChange}
                value={formData.durationType}
                selected="hours"
              />
              <Label check>Hours</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="durationType"
                name="radio"
                type="radio"
                onChange={handleChange}
                value={formData.durationType}
                selected="days"
              />
              <Label check>Days</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="durationType"
                name="radio"
                type="radio"
                onChange={handleChange}
                value={formData.durationType}
                selected="weeks"
              />
              <Label check>Weeks</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="durationType"
                name="radio"
                type="radio"
                onChange={handleChange}
                value={formData.durationType}
                selected="months"
              />
              <Label check>Months</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="durationType"
                name="radio"
                type="radio"
                onChange={handleChange}
                value={formData.durationType}
                selected="years"
              />
              <Label check>Years</Label>
            </FormGroup>
          </FormGroup>
        </span>
        <Input
          id="duration"
          name="duration"
          placeholder="Duration"
          type="number"
          onChange={handleChange}
          value={formData.duation}
          min="1"
        />
      </FormGroup>
      <FormGroup>
        <Label for="submissionDate">Submission Date</Label>
        <Input
          id="submissionDate"
          name="submissionDate"
          placeholder="Submission Date"
          type="date"
          onChange={handleChange}
          value={formData.submissionDate}
          readOnly={true}
        />
      </FormGroup>

      <FormGroup>
        <Label for="taskDescription">Task Description</Label>
        <Input
          id="taskDescription"
          name="description"
          type="textarea"
          onChange={handleChange}
          value={formData.taskDescription}
        />
        <FormText>
          Add a brief description of the task to get the assignee started.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="assignee">Asign User</Label>
        <Input
          id="assignee"
          name="assignee"
          type="select"
          onChange={handleChange}
          value={formData.assignee}
        >
          <option>John Doe</option>
          <option>Anjette Jub</option>
          <option>Ongidi Seriousman</option>
          <option>No Jokes</option>
          <option>Brogrammar James</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="file">File</Label>
        <Input
          multiple={true}
          id="files"
          name="file"
          type="file"
          onChange={handleChange}
          value={formData.files}
        />
        <FormText>
          Add file incase the task has more detailed requirements that the
          assignee will need to successfully complete the task.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Approved</legend>
        <FormGroup check>
          <Input
            id="approved"
            name="approved"
            type="radio"
            onChange={handleChange}
            value={formData.approved}
            selected="yes"
          />
          <Label check>Yes</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="approved"
            name="approved"
            type="radio"
            onChange={handleChange}
            value={formData.approved}
            selected="no"
          />
          <Label check>No</Label>
        </FormGroup>
      </FormGroup>
      <Button onClick={handleSubmit}>Save</Button>
    </Form>
  );
}
export default TaskForm;
