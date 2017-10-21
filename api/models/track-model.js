import {database, docTypes} from '../../database';


export class TrackModelClass {
    getList () {
        return database.find({docType: docTypes.TRACK})
    }

    addComment (name, idTrack, message) {
        return database.insert({docType: docTypes.TRACK, message: message, name: name, id_track: idTrack})
    }
}


export const trackModel = new TrackModelClass();


