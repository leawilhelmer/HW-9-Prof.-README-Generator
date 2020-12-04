const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
const path = require('path')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your E-Mail address?',
      },

      {
        type: 'input',
        name: 'title',
        message: 'What is the title for the Project?',
      },


      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your Project?',
      },

      {
        type: 'confirm',
        name: 'contents',
        message: 'Would you like to have a table of content?',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps required?',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Please provide the project usage',
      },

      {
        type: 'list',
        name: 'license',
        message: 'What kind of license did you use?',
        choices: [
            "MIT", "APACHE 2.0", "GPL 3.0", "none"
        ]
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'Introduce your project to help people start using it.',
      },

      {
        type: 'input',
        name: 'test',
        message: 'Provide example how to run the code',
      },



];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown ({...answers})))
}

// function call to initialize program
init();
