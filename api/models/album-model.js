import {database, docTypes} from '../../database';


export class AlbumModelClass {
    getList () {
        return database.find({docType: docTypes.ALBUM})
    }
}


export const albumModel = new AlbumModelClass();


