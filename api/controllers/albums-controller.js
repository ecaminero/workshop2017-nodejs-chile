import {albumModel} from '../models';


class AlbumControllerClass {
    getList (req, res) {
        return albumModel.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }
}

export const AlbumController = new AlbumControllerClass();
