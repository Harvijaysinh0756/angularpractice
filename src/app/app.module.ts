import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TestComponent } from './strural-directives/test/test.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './ComponentInteraction/parent/parent.component';
import { ChildComponent } from './ComponentInteraction/child/child.component';
import { EmployeeListComponent } from './ServicesExample/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './ServicesExample/employee-details/employee-details.component';
import { EmployeeService } from './Services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';




@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
