import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>
    <H2>deparment id is : {{ departmentId }}</H2>
    <a (click)='goPrevoius()'>prevoius</a>
    <a (click)="goNext()">Next</a>


    <br>
    <p>
      <button (click)="overview()">overview</button>
      <button (click)="contact()">contact</button>
    </p>
    <router-outlet></router-outlet>

    <button (click)="goDepartment()">back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public  departmentId : number  = 0;
  constructor(private Activateroute : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    // let id  = parseInt(this.Activateroute.snapshot.paramMap.get('id') || "");
    // this.departmentId = id;

    this.Activateroute.paramMap.subscribe((param : ParamMap) => {
      let id = parseInt(param.get('id') || "");
      this.departmentId = id;
    });
  }

  goPrevoius()
  {
    let prevoiusID = this.departmentId - 1;
    this.router.navigate(['/department',prevoiusID]);
  }

  goNext()
  {
    let nextID = this.departmentId + 1;
    this.router.navigate(['/department',nextID]);
  }

  goDepartment()
  {
    let selectedID = this.departmentId  ? this.departmentId : null ; 
    this.router.navigate(['/department' , {id : selectedID , test : 'testvalue'}]);

    // this.router.navigate(['../', {id : selectedID}], {relativeTo : this.Activateroute})
  }

  overview()
  {
    this.router.navigate(['overview'] , {relativeTo : this.Activateroute})
  }
  
  
  contact()
  {
    this.router.navigate(['contact'] , {relativeTo : this.Activateroute})
  }


}
