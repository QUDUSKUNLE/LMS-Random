[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)
[![Build Status](https://travis-ci.org/QUDUSKUNLE/LMS-Random.svg?branch=master)](https://travis-ci.org/QUDUSKUNLE/LMS-Random)
[![Coverage Status](https://coveralls.io/repos/github/QUDUSKUNLE/LMS-Random/badge.svg?branch=master)](https://coveralls.io/github/QUDUSKUNLE/LMS-Random?branch=master)

#### LMS-Random
**A simple app to generate random phone numbers in a telecommunication company**

#### Feature
LMS-Random allows a telecommunication companies to generate phone numbers.
 > Admin get token.
 
 > Admin can generate phone numbers

[API calls guidelines for this project](src/api.md)

#### Folder Structure

 The `server` directory houses the implementation using <a href="https://nodejs.org/">node.js</a> & <a href="https://expressjs.com/">express</a>
 

#### Technology Stack
- Node and Express


#### Get Started
  Kindly follow the steps below to setup a local development environment.
  + ```Clone``` this repository from a terminal ```git clone  https://github.com/QUDUSKUNLE/LMS-Random```

  + ```cd``` into the project directory

  + install project dependencies ```npm install```

  + Create ```.env``` file and set up the environment variables in ```.env-sample```

   + and run `npm start` to run the application

   + Go to ```http://localhost:8000/```

#### Test
 - This app uses Mocha, Chai-Http for `test`
   - Run npm i mocha -g to install Mocha globally and npm i nyc -g to install nyc globally before running npm test to run tests

+ ```git clone https://github.com/QUDUSKUNLE/LMS-Random```

+ run ```npm test```
