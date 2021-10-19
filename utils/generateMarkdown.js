const licenseBits = {
  badge: [], 
  license: "", 
  link: []
};

function renderLicenseBadge(license) {
  let convert = license.split(",");

  convert.forEach(license => {
    switch (license) {
      case ' Apache':
        licenseBits.badge.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
        break;
      case ' Boost':
        licenseBits.badge.push("[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
        break;
      case ' BSD 3':
        licenseBits.badge.push("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
        break;
      case ' BSD 2':
        licenseBits.badge.push("[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
        break;
      case ' Creative Commons 0':
        licenseBits.badge.push("[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)");
        break;
      case ' Eclipse':
        licenseBits.badge.push("[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)");
        break;
      case ' GNU GPL v3':
        licenseBits.badge.push("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
        break;
      case ' GNU GPL v2':
        licenseBits.badge.push("[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
        break;
      case ' GNU AGPL v3':
        licenseBits.badge.push("[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)");
        break;
      case ' GNU LGPL v3':
        licenseBits.badge.push("[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");
        break;
      case ' GNU FDL v1.3':
        licenseBits.badge.push("[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)");
        break;
      case ' IBM':
        licenseBits.badge.push("[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)");
        break;
      case ' ISC':
        licenseBits.badge.push("[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)");
        break;
      case ' MIT':
        licenseBits.badge.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
        break;
      case ' Mozilla':
        licenseBits.badge.push("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
        break;
      case ' Open Data Commons - Attribution License (BY)':
        licenseBits.badge.push("[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)");
        break;
      case ' Open Data Commons - Open Database License (ODbL)':
        licenseBits.badge.push("[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)");
        break;
      case ' Open Data Commons - Public Domain Dedication and License (PDDL)':
        licenseBits.badge.push("[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)");
        break;
      case ' Perl - The Perl License':
        licenseBits.badge.push("[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)");
        break;
      case ' Perl - The Artistic License 2.0':
        licenseBits.badge.push("[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)");
        break;
      case ' SIL':
        licenseBits.badge.push("[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)");
        break;
      case ' Unlicense':
        licenseBits.badge.push("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
        break;
      case ' WTFPL':
        licenseBits.badge.push("[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)");
        break;
      case ' Zlib':
        licenseBits.badge.push("[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)");
        break;
      default:
        "";
    }
  })
}

function renderLicenseLink(license) {
  let convert = license.split(",");

  convert.forEach(license => {
    switch (license) {
      case ' Apache':
        licenseBits.link.push(" https://opensource.org/licenses/Apache-2.0");
        break;
      case ' Boost':
        licenseBits.link.push(" https://www.boost.org/LICENSE_1_0.txt");
        break;
      case ' BSD 2':
        licenseBits.link.push(" https://opensource.org/licenses/BSD-2-Clause");
        break;
      case ' BSD 3':
        licenseBits.link.push(" https://opensource.org/licenses/BSD-3-Clause");
        break;
      case ' Creative Commons 0':
        licenseBits.link.push(" http://creativecommons.org/publicdomain/zero/1.0/");
        break;
      case ' Eclipse':
        licenseBits.link.push(" https://opensource.org/licenses/EPL-1.0");
        break;
      case ' GNU GPL v3':
        licenseBits.link.push(" https://www.gnu.org/licenses/gpl-3.0");
        break;
      case ' GNU GPL v2':
        licenseBits.link.push(" https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html");
        break;
      case ' GNU AGPL v3':
        licenseBits.link.push(" https://www.gnu.org/licenses/agpl-3.0");
        break;
      case ' GNU LGPL v3':
        licenseBits.link.push(" https://www.gnu.org/licenses/lgpl-3.0");
        break;
      case ' GNU FDL v1.3':
        licenseBits.link.push(" https://www.gnu.org/licenses/fdl-1.3");
        break;
      case ' IBM':
        licenseBits.link.push(" https://opensource.org/licenses/IPL-1.0");
        break;
      case ' ISC':
        licenseBits.link.push(" https://opensource.org/licenses/ISC");
        break;
      case ' MIT':
        licenseBits.link.push(" https://opensource.org/licenses/MIT");
        break;
      case ' Mozilla':
        licenseBits.link.push(" https://opensource.org/licenses/MPL-2.0");
        break;
      case ' Open Data Commons - Attribution License (BY)':
        licenseBits.link.push(" https://opendatacommons.org/licenses/by/");
        break;
      case ' Open Data Commons - Open Database License (ODbL)':
        licenseBits.link.push(" https://opendatacommons.org/licenses/odbl/");
        break;
      case ' Open Data Commons - Public Domain Dedication and License (PDDL)':
        licenseBits.link.push(" https://opendatacommons.org/licenses/pddl/");
        break;
      case ' Perl - The Perl License':
        licenseBits.link.push(" https://opensource.org/licenses/Artistic-2.0");
        break;
      case ' Perl - The Artistic License 2.0':
        licenseBits.link.push(" https://opensource.org/licenses/Artistic-2.0");
        break;
      case ' SIL':
        licenseBits.link.push(" https://opensource.org/licenses/OFL-1.1");
        break;
      case ' Unlicense':
        licenseBits.link.push(" http://unlicense.org/");
        break;
      case ' WTFPL':
        licenseBits.link.push(" http://www.wtfpl.net/about/");
        break;
      case ' Zlib':
        licenseBits.link.push(" https://opensource.org/licenses/Zlib");
        break;
      default:
        "";
    }
  })
}

function renderLicenseSection(license) {
if (license != "") {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  licenseBits.license = license;

  return `${licenseBits.badge}
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
  # Contribute
  ## ${data.contributeRepo}
  ##
  # Testing
  ## ${data.testCommand}
  ##
  # License
  ## ${renderLicenseSection(license)}
  ##
  # Contact
  ## ${data.userName}
  ## ${data.email}
`;
}

module.exports = generateMarkdown;
