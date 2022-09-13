import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialogREF : DialogRef) { }

  openDialog(dialog: any): void {
    const dialogRef = this.dialog.open(dialog, {
      width: '250px',
      // data: {name: this.name, animal: this.animal},
    });
  }
  ngOnInit(): void {
  }

  close()
  {
    // this.dialogREF.
  }

}
