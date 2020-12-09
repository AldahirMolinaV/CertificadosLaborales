import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProvisionservicesComponent} from './workcertificate/provisionservices/provisionservices.component';


const routes: Routes = [
  {path: '', component: ProvisionservicesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
