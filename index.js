// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const md = require('./utils/generateMarkdown');
const filename = `README.md`;
const questions = [
    {
      type: 'input',
      name: 'userName',
      message: 'What is your GitHub username?',
    },
		{
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
		{
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name?',
    },
		{
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'checkbox',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: [' Apache', ' Boost', ' BSD 2', ' BSD 3', ' Creative Commons 0', ' Eclipse', ' GNU GPL v3', ' GNU GPL v2', ' GNU AGPL v3', ' GNU LGPL v3', ' GNU FDL v1.3', ' IBM', ' ISC', ' MIT', ' Mozilla', ' Open Data Commons - Attribution License (BY)', ' Open Data Commons - Open Database License (ODbL)', ' Open Data Commons - Public Domain Dedication and License (PDDL)', ' Perl - The Perl License', ' Perl - The Artistic License 2.0', ' SIL', ' Unlicense', ' WTFPL', ' Zlib'],
    },
		{
      type: 'input',
      name: 'dependsCommand',
      message: 'What command should be run to install dependencies?',
    },
		{
      type: 'input',
      name: 'testCommand',
      message: 'What command should be run to run tests?',
    },
		{
      type: 'input',
      name: 'usingRepo',
      message: 'What does the user need to know about using the repo?',
    },
		{
      type: 'input',
      name: 'contributeRepo',
      message: 'What does the user need to know about contributing to the repo?',
    }
	];

function writeToFile(filename, data) {
	fs.writeFile(filename, data, (err) =>
		err ? console.log(err) : console.log('Success!')
	);
}


function init() {
	inquirer.prompt(questions)
		.then((data) => 
			writeToFile(filename, md(data))
		);
}

init();


