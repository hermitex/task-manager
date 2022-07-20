const tasks = [
  {
    id: 1,
    taskName: "Create Home Component",
    creationDate: "20/7/2022",
    description: "Create a new Home Component",
    files: ["User Rquirements.txt"],
    assignee: { userId: 1, firstName: "John", lastName: "Doe", email: "" },
    duration: 4,
    durationType: "Weeks",
    submissionDate: "20/8/2022",
    approved: true,
    status: "Not Done",
  },
  {
    id: 2,
    taskName: "Create Logout Component",
    creationDate: "20/7/2022",
    description: "Create Logout Component",
    files: [],
    assignee: { userId: 3, firstName: "Jane", lastName: "Doe", email: "" },
    duration: 2,
    durationType: "Months",
    submissionDate: "20/9/2022",
    approved: false,
    status: "Not Done",
  },
];

export {tasks}