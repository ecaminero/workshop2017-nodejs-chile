import {albumModel} from '../models/album-model';
import {database, docTypes} from '../../database';

class AlbumControllerClass {
    getList (req, res) {
        return albumModel.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }

    getListByBand (req, res) {
        return albumModel.getListByBand(req.params._id)
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }
    getAllTracks (req, res) {
        return albumModel.getAllTracks(req.params.id)
        .then((response) => {
            let promise = [];
            response.forEach((album) => {
                album.tracks.forEach((track) => {
                    promise.push(database.find({ docType: docTypes.TRACK, _id: track}))
                });
            })
            return Promise.all(promise);
        }).then((albums) => {res.json(albums);})
        .catch(error => res.json({error: error.message}))
    }
}


export const albumController = new AlbumControllerClass();
