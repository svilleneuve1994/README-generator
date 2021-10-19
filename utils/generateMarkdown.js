const licenseBits = {badge: "", license: "", link: ""};

function renderLicenseBadge(license) {
  let badge = `${licenseBits.badge}`;
  switch (license) {
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'Boost':
      badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'BSD 3':
      badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'BSD 2':
      badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'Creative Commons 0':
      badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclipse':
      badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'GNU GPL v3':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'GNU GPL v2':
      badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU AGPL v3':
      badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU LGPL v3':
      badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case 'GNU FDL v1.3':
      badge = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
      break;
    case 'IBM':
      badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case 'ISC':
      badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'Open Data Commons - Attribution License (BY)':
      badge = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
      break;
    case 'Open Data Commons - Open Database License (ODbL)':
      badge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
      break;
    case 'Open Data Commons - Public Domain Dedication and License (PDDL)':
      badge = `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
      break;
    case 'Perl - The Perl License':
      badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      break;
    case 'Perl - The Artistic License 2.0':
      badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      break;
    case 'SIL':
      badge = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;
      break;
    case 'Unlicense':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case 'WTFPL':
      badge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
      break;
    case 'Zlib':
      badge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
      break;
    default:
      badge = "";
  }
  return badge;
}

function renderLicenseLink(license) {
  let link = `${licenseBits.link}`;
  switch (license) {
    case 'Apache':
      link = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'Boost':
      link = `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case 'BSD 2':
      link = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case 'BSD 3':
      link = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'Creative Commons 0':
      link = `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case 'Eclipse':
      link = `https://opensource.org/licenses/EPL-1.0`;
      break;
    case 'GNU GPL v3':
      link = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'GNU GPL v2':
      link = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
      break;
    case 'GNU AGPL v3':
      link = `https://www.gnu.org/licenses/agpl-3.0`;
      break;
    case 'GNU LGPL v3':
      link = `https://www.gnu.org/licenses/lgpl-3.0`;
      break;
    case 'GNU FDL v1.3':
      link = `https://www.gnu.org/licenses/fdl-1.3`;
      break;
    case 'IBM':
      link = `https://opensource.org/licenses/IPL-1.0`;
      break;
    case 'ISC':
      link = `https://opensource.org/licenses/ISC`;
      break;
    case 'MIT':
      link = `https://opensource.org/licenses/MIT`;
      break;
    case 'Mozilla':
      link = `https://opensource.org/licenses/MPL-2.0`;
      break;
    case 'Open Data Commons - Attribution License (BY)':
      link = `https://opendatacommons.org/licenses/by/`;
      break;
    case 'Open Data Commons - Open Database License (ODbL)':
      link = `https://opendatacommons.org/licenses/odbl/`;
      break;
    case 'Open Data Commons - Public Domain Dedication and License (PDDL)':
      link = `https://opendatacommons.org/licenses/pddl/`;
      break;
    case 'Perl - The Perl License':
      link = `https://opensource.org/licenses/Artistic-2.0`;
      break;
    case 'Perl - The Artistic License 2.0':
      link = `https://opensource.org/licenses/Artistic-2.0`;
      break;
    case 'SIL':
      link = `https://opensource.org/licenses/OFL-1.1`;
      break;
    case 'Unlicense':
      link = `http://unlicense.org/`;
      break;
    case 'WTFPL':
      link = `http://www.wtfpl.net/about/`;
      break;
    case 'Zlib':
      link = `https://opensource.org/licenses/Zlib`;
      break;
    default:
      link = "";
  }
  return link;
}

function renderLicenseSection(license) {
if (license != "") {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  licenseBits.badge = badge;
  licenseBits.license = license;
  licenseBits.link = link;
  console.log(badge);
  console.log(license);
  console.log(link);
  return `## ${licenseBits.badge}
  ## This project is licensed under ${licenseBits.license}.
  ## ${licenseBits.link}`;
} else {
  return "All Rights Reserved";
}}

function generateMarkdown(data) {
  let license = `${data.license}`;

  return `  # ${data.projectName}
  ##
  # Table of Contents
  ## - [Description](#description)
  ## - [Installation](#installation)
  ## - [Usage](#usage)
  ## - [License](#license)
  ## - [Contribute](#contribute)
  ## - [Testing](#testing)
  ## - [License](#license)
  ## - [Contact](#contact)
  ##
  # Description
  ## ${data.description}
  ##
  # Installation
  ## ${data.dependsCommand}
  ##
  # Usage
  ## ${data.usingRepo}
  ##
  # License
  ## ${renderLicenseSection(license)}
  ##
  # How to Contribute
  ## ${data.contributeRepo}
  ##
  # Testing
  ## ${data.testCommand}
  ##
  # Contact Me
  ## ${data.userName}
  ## ${data.email}
`;
}

module.exports = generateMarkdown;
