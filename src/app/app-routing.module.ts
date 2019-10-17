import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MattableComponent} from './shared/components/mattable/mattable.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',redirectTo:'mattable',pathMatch:'full'},
  {path:'mattable',component:MattableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
