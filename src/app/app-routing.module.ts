import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path : '' , redirectTo : '/department', pathMatch : 'full'},
  {path : 'department' , component : DepartmentListComponent},
  {
    path : 'department/:id' , component : DepartmentDetailComponent,
    children : [
      {path : 'overview' , component : DepartmentOverviewComponent},
      {path : 'contact' , component : DepartmentContactComponent}
    ]

  },
  {path : 'student' , component : StudentListComponent},
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ DepartmentListComponent,
                                   StudentListComponent,
                                   PageNotFoundComponent,
                                   DepartmentDetailComponent,
                                   DepartmentContactComponent,
                                   DepartmentOverviewComponent
                                  ] 
