import express from 'express';
import colors from 'colors/safe';


import {
    trackController
} from './controllers';
import {bandController} from './controllers/bandsContoller';

export const router = express.Router();



// API Routes
router.get('/tracks', trackController.getList);
router.post('/tracks/:_id/comments', trackController.addComment);

router.get('/bands', bandController.getList);
router.get('/bands/:_id', bandController.getBandById);

