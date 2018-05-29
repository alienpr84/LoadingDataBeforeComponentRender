export class StudentModel {

    // attributes
    private _name: string;
    private _age: number;
    private _sex: string;
    private _phone: string;
    private _address: string;

    // by default
    constructor() {}

    // getters
    get name(): string { return this._name; }
    get age(): number { return this._age; }
    get sex(): string { return this._sex; }
    get phone(): string { return this._phone; }
    get address(): string { return this._address; }
}
