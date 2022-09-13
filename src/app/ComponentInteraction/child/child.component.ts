import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() public parentData = "";
  @Input('parentData') public childacceptname = "";
  @Output() public childevent = new EventEmitter();


  // for pipes

  public message = "welcome to the world";


  public person = {

    "firstname" : "jay",
    "lastname" : "vadoadariya"
  }

  public date = new Date();
  
  constructor() { }

  ngOnInit(): void {

    this.childevent.emit('hello parent from child');
  }



}
