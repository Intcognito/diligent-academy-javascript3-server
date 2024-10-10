const fs = require('fs');
const prompt = require('prompt-sync')();
const express = require('express');

const port = 3000;
const app = express();
app.use(express.json());