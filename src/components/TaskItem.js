import React from "react";

function TaskItem({
  id,
  name,
  creationDate,
  submissionDate,
  description,
  files,
  assignee,
  approved,
  status,
  durationType,
  duration,
}) {
  return (
    <tr key={id}>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{creationDate}</td>
      <td>{submissionDate}</td>
      <td>{description}</td>
      <td>{files.length ? files.length : "None"}</td>
      <td>
        {assignee.firstName} {assignee.lastName}
      </td>
      <td>{approved ? "Yes" : "No"}</td>
      <td>{status}</td>
    </tr>
  );
}

export default TaskItem;
