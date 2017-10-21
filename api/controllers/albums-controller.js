import {albumModel} from '../models/album-model';


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
}


export const albumController = new AlbumControllerClass();
