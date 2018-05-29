import { StudentModel } from './student.model';

export class SchoolModel {

    // attributes
    private _name: string;
    private _phone: string;
    private _address: string;
    private _students: StudentModel[];

    // by default
    constructor() {}

    // getters
    get name(): string { return this._name; }
    get phone(): string { return this._phone; }
    get address(): string { return this._address; }
    get students(): StudentModel[] { return this._students; }
}
