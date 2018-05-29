import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SchoolModel } from '../models/school.model';

@Injectable()
export class HomeService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = './assets/school.json';
   }

  public getSchool(): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(this.url);
  }
}
