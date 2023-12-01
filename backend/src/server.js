const express = require("express");
const app = express();
const prisma = require('./Client/PrismaClient');
require('dotenv').config();
const cors = require('cors')
const PORT = process.env.PORT || 3004;
app.use(express.json());



app.use(cors())

const createUser = require('../routes/create-user')
const readUsers = require('../routes/read-users');
const login = require('../routes/login-router');



app.use('/create', createUser);
app.use('/login', login);
app.use('/read', readUsers);





app.listen(PORT, console.log(`Connected in port: ${PORT}`));
