import {database, docTypes} from '../../database';


export class BandModelClass {
    getList () {
        return database.find({docType: docTypes.BAND})
    }
    getById () {
        return database.findOne({docType: docTypes.BAND})
    }
}


export const bandModel = new BandModelClass();
