import {bandModel} from "../models/band-model";
import {database, docTypes} from '../../database';

class BandControllerClass {
    getList (req, res) {
        return bandModel.getList()
        .then(documents => res.json(documents))
        .catch(error => res.json({error: error.message}));
    }

    getBandById (req, res) {
        
        return bandModel.getById(req.params._id)
        .then(response => res.json(response))
        .catch(error => res.json({error: error.message}));
    }

    getAllArtist (req, res) {
        return bandModel.getAllArtist(req.params.id)
        .then((response) => {
            let promise = [];
            response.forEach((band) => {
                band.artists.forEach((artist) => {
                    promise.push(database.find({ docType: docTypes.ARTIST, _id: artist}))
                });
            })
            return Promise.all(promise);
        }).then((artists) => {
            res.json(artists);
        })
        .catch(error => res.json({error: error.message}))
    }
}

export const bandController = new BandControllerClass();
