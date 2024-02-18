import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import authMiddleware from './middleware/authmiddleware';

// Connect to Db
// mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));


// const app: Application = express()

// app.use(express.json())


