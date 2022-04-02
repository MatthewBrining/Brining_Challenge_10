const inquirer = require("inquirer");
const fs = require("fs");

const newEmployeeArray = [];

const questions = [
    {
        type: "input",
        message: "Please enter the employee's name.",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the employee's ID no.",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the employee's email address.",
        name: "email",
    },
    {
        type: "list",
        message: "Please select the employee's role.",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const managerQuestion = [
    {
        type: "input",
        message: "Please enter new manager's office number.",
        name: "officeNumber",
    },
];

const engineerQuestion = [
    {
        type: "input",
        message: "Please enter new engineer's GitHub username.",
        name: "github",
    },
];

const studentQuestion = [
    {
        type: "input",
        message: "Please enter university new intern attended.",
        name: "school",
    },
];

function roleQuestion() {
    if (questions.role === "Manager"){
        const roleResponse = inquirer.prompt(managerQuestion)
        const newTeamMember = new teamMember(
            questions.name,
            questions.id,
            questions.email,
            managerQuestion.officeNumber
        );
        newEmployeeArray.push(newTeamMember);
    } else if (questions.role === "Engineer") {
        const roleResponse = inquirer.prompt(engineerQuestion)
        const newTeamMember = new teamMember(
            questions.name,
            questions.id,
            questions.email,
            engineerQuestion.github
        );
        newEmployeeArray.push(newTeamMember);
    } else if (questions.role === "Intern") {
        const roleResponse = inquirer.prompt(studentQuestion)
        const newTeamMember = new teamMember(
            questions.name,
            questions.id,
            questions.email,
            studentQuestion.school
        );
        newEmployeeArray.push(newTeamMember);
    }

}

function newEmployee() {inquirer.prompt(questions).then(roleQuestion)};

