import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SchoolModel } from '../models/school.model';
import { HomeService } from '../services/home.service';


@Injectable()
export class SchoolResolver implements Resolve<SchoolModel> {

    private school: SchoolModel;

    constructor(private service: HomeService) {}

    resolve(): Observable<SchoolModel> {
        return this.service.getSchool();
    }
}
