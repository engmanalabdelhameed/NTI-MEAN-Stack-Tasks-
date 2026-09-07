import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home.component';
import { AboutComponent } from './aboutComponent/about.component';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [

 {path: '' ,redirectTo: 'home' ,pathMatch: 'full'},
 {path : 'home' , component : HomeComponent},
 {path : 'aboutus' , component : AboutComponent},
 {path : "**" , component : Notfound}
 
];
