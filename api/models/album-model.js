import {database, docTypes} from '../../database';


export class AlbumModelClass {
    getList () {
        return database.find({docType: docTypes.ALBUM})
    }
    getListByBand (id) {
        return database.findOne({_id: id, docType: docTypes.BAND})
            .then((bands) => {
                console.log(bands, 'bands');
            })

    }
}


export const albumModel = new AlbumModelClass();