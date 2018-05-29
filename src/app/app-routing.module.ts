import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolModel } from './models/school.model';
import { SchoolResolver } from './resolvers/school.resolver'; // important


const appRoutes: Routes = [
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    component: HomeComponent,
    resolve: { school: SchoolResolver },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  providers: [ SchoolResolver ], // important
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
