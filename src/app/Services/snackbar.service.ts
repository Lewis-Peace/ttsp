import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  public openSuccessSnackbar(message: string) {
    this.snackbar.open(message, undefined, {
      panelClass: ['success-snackbar'],
      duration: 2000,
      verticalPosition: 'bottom'
    });
  }
  
  public openErrorSnackbar(message: string) {
    this.snackbar.open(message, undefined, {
      panelClass: ['error-snackbar'],
      duration: 2000,
      verticalPosition: 'bottom'
    });
  }

}
