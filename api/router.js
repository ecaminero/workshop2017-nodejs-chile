import express from 'express';
import colors from 'colors/safe';


import {
    trackController
} from './controllers';
import {bandController} from './controllers/bandsContoller';

export const router = express.Router();



// API Routes
router.get('/tracks', trackController.getList);
router.get('/bands', bandController.getList);
router.get('/bands/:id', bandController.getBandById);