import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaccueilComponent } from './aaccueil/aaccueil.component';
import { ListPharmComponent } from './list-pharm/list-pharm.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent},
  {path: 'aaccueil', component:AaccueilComponent},
  {path: 'list-pharm', component:ListPharmComponent},
  {path: 'list-users', component:ListUsersComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
