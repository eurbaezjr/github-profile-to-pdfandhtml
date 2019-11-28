const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require('html-pdf');

const questions = [{
  message: "Enter your GitHub username:",
  name: "username"
  },{
    type: 'list',
    message: "What is your favorite color?",
    name: "favcolor",
    choices: ['blue','red','yellow','green','purple','orange','black','white']
  }];  

inquirer
  .prompt(questions)
  .then(answers => {
    let queryUrl = `https://api.github.com/users/${answers.username}`;
    axios
      .get(queryUrl)
      .then(function(res) {
        console.log(res.data);
        const favColor = answers.favcolor;
        const profilePic = res.data.avatar_url;
        const userName = res.data.login;
        const location = res.data.location;
        const userProfile = res.data.html_url;
        const userBlog = res.data.blog;
        const userBio = res.data.bio;
        const publicRepos = res.data.public_repos;
        const followers = res.data.followers;
        const userStars = 1;
        const following = res.data.following;
        const locationNew = location.split(" ");
        const finalLocation = locationNew.join('+');
        if(favColor == "blue" || favColor == "red" || favColor == "green" || favColor == "purple" || favColor == "black"){
          var fontColor =  "white";
        } else {
          var fontColor =  "black";
        };
      
        // console.log (favColor + "\n" + profilePic + "\n" + userName + "\n" +location + "\n" + userProfile + "\n" + userBlog + "\n" + userBio + "\n" + publicRepos + "\n" + followers + "\n" + userStars + "\n" + following);
        let myHTML = 
            `<!DOCTYPE html>
            <html lang="en">
              <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
                  <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                  <title>Document</title>
                  <body>
                  <div class="wrapper">
            
                  <div class="photo-header">
                    <img src="${profilePic}">
                    <h1>Hi!</h1>
                    <h2>My name is ${userName}</h2>
                    <div class="links-nav"> 
                    <a class="fas fa-location-arrow" href="https://www.google.com/maps/place/${finalLocation}">${location}</a>
                    <a class="fas fa-blog" href="${userBlog}"> Blog</a>
                    <a class="fab fa-github-alt" href="${userProfile}"> Github</a>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row">
                        <h4 class="col">${userBio}</h4>
                    </div>
                    <div class="row">
                            <h5 class="col card">Public Repositories<br>${publicRepos}</h5>
                            <h5 class="col card">Followers<br>${followers}</h5>
                    </div>
                    <div class="row">
                            <h5 class="col card">Github Stars<br>${userStars}</h5>
                            <h5 class="col card">Following<br>${following}</h5>
                    </div>
                </div>
                  </div> 
                  </body>
                  <style>
                      @page {
                        margin: 0;
                      }
                    *,
                    *::after,
                    *::before {
                    box-sizing: border-box;
                    }
                    html, body {
                    padding: 0;
                    margin: 0;
                    }
                    html, body, .wrapper {
                    height: 100%;
                    }
                    .wrapper {
                    background-color: white;
                    padding-top: 100px;
                    }
                    body {
                    background-color: white;
                    -webkit-print-color-adjust: exact !important;
                    font-family: 'Cabin', sans-serif;
                    }
                    main {
                    background-color: #E9EDEE;
                    height: auto;
                    padding-top: 30px;
                    }
                    h1, h2, h3, h4, h5, h6 {
                    font-family: 'BioRhyme', serif;
                    margin: 0;
                    }
                    h1 {
                    font-size: 3em;
                    }
                    h2 {
                    font-size: 2.5em;
                    }
                    h3 {
                    font-size: 2em;
                    }
                    h4 {
                    font-size: 1.5em;
                    }
                    h5 {
                    font-size: 1.3em;
                    }
                    h6 {
                    font-size: 1.2em;
                    }
                    .photo-header {
                    position: relative;
                    margin: 0 auto;
                    margin-bottom: -50px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;    
                    background-color: ${favColor};
                    color: ${fontColor};
                    padding: 10px;
                    width: 95%;
                    border-radius: 6px;
                    }
            
                    img {
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-top: -75px;
                    justify-content: center;
                    border: 6px solid ${favColor};
                    box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
                    }
            
                    .photo-header h1, .photo-header h2 {
                    width: 100%;
                    text-align: center;
                    }
                    .photo-header h1 {
                    margin-top: 10px;
                    }
                    .links-nav {
                    width: 100%;
                    text-align: center;
                    padding: 20px 0;
                    font-size: 1.1em;
                    }
                    .nav-link {
                    display: inline-block;
                    margin: 5px 10px;
                    }
                    .container {
                    padding: 50px;
                    padding-left: 100px;
                    padding-right: 100px;
                    background-color: white;
                    }
                    .workExp-date {
                    font-style: italic;
                    font-size: .7em;
                    text-align: right;
                    margin-top: 10px;
                    }
                    .row {
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      margin-top: 20px;
                      margin-bottom: 20px;
                    }
            
                    .card {
                      padding: 20px;
                      border-radius: 6px;
                      background-color:blue;
                      color: white;
                      background-color: ${favColor};
                      color: ${fontColor};
                      margin: 20px;
                    }
                    
                    .col {
                    flex: 1;
                    text-align: center;
                    }
            
                    a, a:hover {
                    text-decoration: none;
                    color: inherit;
                    font-weight: bold;
                    }
            
                    @media print { 
                      body { 
                        zoom: .75; 
                      } 
                    }
                  </style>`
                 
                  fs.writeFileSync("index.html",myHTML);
                  var html = fs.readFileSync('index.html', 'utf8');
                  var options = { format: 'Tabloid', orientation: "portrait"}; // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                  pdf.create(html, options).toFile('./profile.pdf', function(err, res) {
                    if (err) return console.log(err);
                    console.log(res); 
                  });

        })
      });