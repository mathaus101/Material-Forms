import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFormComponent } from './first-form/first-form.component';

const routes: Routes = [
  { path: 'form1', component: FirstFormComponent },
  // { path: '', redirectTo: '/form1', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
