import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FullComponent } from './workcertificate/full/full.component';
import {ProvisionservicesComponent} from './workcertificate/provisionservices/provisionservices.component';
import { SimpleComponent } from './workcertificate/simple/simple.component';


const routes: Routes = [
  {path: 'provisionservices', component: ProvisionservicesComponent},
  {path: 'simple', component: SimpleComponent},
  {path: 'full', component: FullComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
