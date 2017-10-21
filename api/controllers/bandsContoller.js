import {bandModel} from "../models/band-model";


class BandControllerClass {
    getList (req, res) {
        return bandModel.getList()
        .then(documents => res.json(documents))
        .catch(error => res.json({error: error.message}));
    }

    getBandById (req, res) {
        console.log(req.params, 'parametros');
        return bandModel.getById(req.id)
        .then(response => res.json(response))
        .catch(error => res.json({error: error.message}));
    }
}

export const bandController = new BandControllerClass();
