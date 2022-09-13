import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments  = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"Mongo"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"python"},
  ]

  public  selectedID : number  = 0 ;
  route: any;
  constructor(private router : Router , route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param : ParamMap) => {
      let id = parseInt(param.get('id') || "");
      this.selectedID = id;
  });
}

  onSelect(department: any)
  {
    console.log(department.id)
    this.router.navigate(['/department',department.id])
    // this.router.navigate([department.id],{relativeTo : this.route})
  }
  isSelected(deparment : any)
  {
    return deparment.id == this.selectedID
  }
}
