import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  fromPage: string;
  fromDialog!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
