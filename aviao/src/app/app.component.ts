import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
  ) { }
  
  ngOnInit(): void {
    
  }

  abrirForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.position = {
      left: '38%',
    };

    const dialogRef = this._dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(( item ) => {
     
        console.log(item);
    });
  }
}
