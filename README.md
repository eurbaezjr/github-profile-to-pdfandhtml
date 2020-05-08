# Github Profile to PDF & HTML Generator

![Example 1](./profile-generator-demo.gif) 

A backend Node.js command line application that programmatically generates a PDF and HTML file by connecting to Github's API and retrieving a developer's information. 

## Functionality & User Input

The user will be prompted for their github profile name and favorite color, which will then be used to format the document. 

The PDF document will populate with the following Github fields. 

* Profile image
* User name
* User location via Google Maps
* User GitHub profile
* User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Installing Instructions

* In the root of the folder, there is a `package.json`, so make sure to `npm install`.

* The dependencies include, [Node.js](https://nodejs.org/en/), [fs](https://nodejs.dev/the-nodejs-fs-module), [axios](https://www.npmjs.com/package/axios), [inquirer](https://www.npmjs.com/package/inquirer), [html-pdf](https://www.npmjs.com/package/html-pdf)

* The application is invoked with the following command: `node index.js`.

### Roster output

The application will return a PDF file called profile.pdf to the root folder of your repository