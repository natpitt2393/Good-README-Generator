function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.license}
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.contact}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
