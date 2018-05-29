import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SchoolModel } from '../models/school.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private school: SchoolModel;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.school = this.route.snapshot.data.school;

  }
}
