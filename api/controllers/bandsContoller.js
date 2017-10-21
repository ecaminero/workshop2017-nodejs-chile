import {bandModel} from "../models/band-model";


class BandControllerClass {
    getList (req, res) {
        return bandModel.getList()
        .then(documents => res.json(documents))
        .catch(error => res.json({error: error.message}));
    }
}

export const bandController = new BandControllerClass();
