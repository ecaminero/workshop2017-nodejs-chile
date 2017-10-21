import {database, docTypes} from '../../database';


export class BandModelClass {
    getList () {
        return database.find({docType: docTypes.BAND})
    }
    getById (id) {
        return database.findOne({_id: id, docType: docTypes.BAND})
    }
}


export const bandModel = new BandModelClass();
