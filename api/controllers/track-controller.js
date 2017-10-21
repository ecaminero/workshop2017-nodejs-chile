import {trackModel} from '../models';


class TrackControllerClass {
    getList (req, res) {
        return trackModel.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }

    addComment (req, res) {
        const idTrack = req.params.id;
        const name = req.body.name;
        const message = req.body.message;
        return trackModel.addComment(name, idTrack, message)
        .then(newComment => res.json(newComment))
        .catch(error => res.json(error));
    }
}

export const trackController = new TrackControllerClass();
