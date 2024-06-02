import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { AccountComponent } from '../components/account/account.component';

const routes: Routes = [

  // { path: 'home', component: AuthComponent },
  // { path:'account', component: AccountComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})



export class AppRoutingModule { }
