// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.contents}

  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  ${data.installation}

  ## Usage 
  
  *Instructions and examples for use:*
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  
  *Follow these guidelines for how to use the code.*
  ${data.contributing}

  ## Tests
  
  *Tests for application and how to run them:*
  ${data.test}
  
  ## Questions

  If you have any questions you can reach out to me here:
  ${data.questions}
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
