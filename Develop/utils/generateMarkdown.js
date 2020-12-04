// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} # ${data.description} # ${data.contents} # ${data.installation} # ${data.license}
`;
}

module.exports = generateMarkdown;
