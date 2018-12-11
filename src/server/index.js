/* eslint-disable no-console */
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import expressValidator from 'express-validator';

import routes from './routes';

dotenv.config();


const prod = process.env.PRODUCTION;
const port = process.env.PORT;

// initialize application
const app = express();

// configure application
app.use(cors());
app.use(require('morgan')('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


app.use('/api/v1', routes);
app.get('/', (req, res) => res.status(200).json({ home: 'LMS Home' }));

app.listen(port, () => console.log(`LMS running on PORT ${port}`));

module.exports = app;
