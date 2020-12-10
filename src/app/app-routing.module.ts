import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FullComponent } from './certificates/full/full.component';
import {ProvisionservicesComponent} from './certificates/provisionservices/provisionservices.component';
import { SimpleComponent } from './certificates/simple/simple.component';
import {EmployeeComponent} from './employee/employee.component';
import {BaseComponent} from './certificates/base/base.component';


const routes: Routes = [

  {path: '', component: EmployeeComponent,
    children: [
      {path: 'provisionservices', component: ProvisionservicesComponent},
      {path: 'simple', component: SimpleComponent},
      {path: 'full', component: FullComponent},
      {path: 'base', component: BaseComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
