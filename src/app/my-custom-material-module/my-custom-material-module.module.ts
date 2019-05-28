import { NgModule } from '@angular/core';
import {MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule, 
  MatToolbarModule,
  MatSnackBarModule,
  MatTooltipModule} from '@angular/material';
import {MatFormFieldModule, matFormFieldAnimations, } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatToolbarModule,
    MatSnackBarModule,
    MatTooltipModule],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatToolbarModule,
    MatSnackBarModule,
    MatTooltipModule],
})
export class MyOwnCustomMaterialModule { }
