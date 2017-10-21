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
router.get('/bands/:id', bandController.getBandById);
router.get('/albums/:id', albumController.getListByBand)
router.post('/tracks/:_id/comments', trackController.addComment);
router.get('/bands/:id/albums', bandController.getAllAlbums);
router.get('/bands/:id/artists', bandController.getAllArtist);