const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const _ = require("underscore");
const generateMarkDown = require("./utils/generateMarkdown");
const api = require("./utils/api");

inquirer
.prompt([
    {
    type: "input",
    message: "Enter you Github username",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email",
    name: "email",
  },
  {
    type: "input",
    message: "what is title of your project",
    name: "title",
  },
  {
    type: "input",
    message: "what is description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "write down installation process",
    name: "installation",
  },
  {
    type: "input",
    message: "what are your future development plans?",
    name: "question1",
  }
])
.then(async function ({username, email, title, description, installation, question1}) {
    
    let {name,avatar_url, html_url} = api.getUser(username);
    const responseData = {
        name, 
        email, 
        avatar_url,
        html_url,
        title, 
        description, 
        installation,
        question1
    } 

    const readme = generateMarkDown(responseData);

    fs.writeFile(`README.md`, readme, err => {
        if(err) throw err;
        console.log("File successfully created");
        }
    );
    });





