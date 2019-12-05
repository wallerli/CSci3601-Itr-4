// Imports
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserListComponent} from './users/user-list.component';
import {WelcomeComponent} from './welcome/welcome.component';

// Route Configuration
export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:room', component: HomeComponent},
  {path: 'users', component: UserListComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
