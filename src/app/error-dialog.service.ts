import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "./components/error-dialog/error-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  renderDialog(error: string){
    let dialogRef = this.dialog.open(ErrorDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        errorMessage: error
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("result returned")
    //   return result == "retry";
    //
    // })
    //   return false;
    return dialogRef.afterClosed();
  }

  constructor(private dialog: MatDialog) { }
}
