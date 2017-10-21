import express from 'express';
import colors from 'colors/safe';


import {
    trackController 
} from './controllers';
import {bandController} from './controllers/bandsContoller';
import {albumController} from './controllers/albums-controller';
export const router = express.Router();



// API Routes
router.get('/tracks', trackController.getList);
router.get('/albums', albumController.getList)
router.get('/bands', bandController.getList);