const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const { response } = require('express');
const { connect } = require('http2');

const app = express();







// function logRequest(request, response, next) {
//     const { method, url } = request;
//     const logLabel = `[${method.toUpperCase()}] ${url}`;
//     console.time(logLabel);
//      next();
//     console.timeEnd(logLabel);
// }


